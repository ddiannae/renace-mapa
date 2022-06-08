import autobind from "autobind-decorator";
import * as React from 'react';
import {
    Template,
    Plugin,
    TemplateConnector,
    Getter,
    Getters,
} from '@devexpress/dx-react-core';
import { TableCell, IconButton, Tooltip } from '@mui/material';
import { Table, VirtualTable, TableHeaderRow } from "@devexpress/dx-react-grid-material-ui";
import { TableColumn } from "@devexpress/dx-react-grid";

function makeDictionary<T>(values: T[], getKey: (value: T) => string) {
    return values.reduce((acc, v) => { acc[getKey(v)] = v; return acc; }, {} as { [key: string]: T });
}

const pluginDependencies = [
    { name: 'Table' },
];
export interface IActionColumn {
    columnName: string;
    icon: React.ReactElement<any>;
    label?: string;
    onClick: (row: any) => void;
}
export interface IActionColumnsProps {
    actionColumns: IActionColumn[];
}

@autobind
class ActionColumnsBase extends React.PureComponent<IActionColumnsProps> {
    static ACTION_COLUMN_TYPE = Symbol("ACTION_COLUMN");
    static components = {
        cellComponent: 'Cell',
        headerCellComponent: 'HeaderCell',
        commandComponent: 'Command',
    };
    render() {
        const { actionColumns } = this.props;
        const columnDictionary = makeDictionary(actionColumns, i => i.columnName);

        return (
            <Plugin
                name="ActionColumn"
                dependencies={pluginDependencies}
            >
                <Getter name="tableColumns" computed={this.computeColumns.bind(null, columnDictionary)} />
                <Template name="tableCell" predicate={this.isActionTableHeader.bind(null)}>
                    {(params: any) => (
                        <TemplateConnector>
                            {(getters, actions) => {
                                return (
                                    <TableCell />
                                );
                            }}
                        </TemplateConnector>
                    )}
                </Template>
                <Template name="tableCell" predicate={this.isActionTableCell.bind(null)}>
                    {(params: any) => (
                        <TemplateConnector>
                            {(getters, actions) => {
                                const actionColumn = columnDictionary[params.tableColumn.column.name];
                                const button = (<IconButton
                                    size="small"
                                    aria-label={actionColumn.label}
                                    style={{ verticalAlign: "middle" }}
                                    onClick={actionColumn.onClick.bind(null, params.tableRow.row)} >
                                    {actionColumn.icon}
                                </IconButton>);
                                if (actionColumn.label) {
                                    return (<TableCell align="right">
                                        <Tooltip title={actionColumn.label}>
                                            {button}
                                        </Tooltip>
                                    </TableCell>);
                                }
                                else {
                                    return (<TableCell align="right">
                                        {button}
                                    </TableCell>);
                                }
                            }}
                        </TemplateConnector>
                    )}
                </Template>
            </Plugin>
        );
    }
    private computeColumns(actionColumns: { [key: string]: IActionColumn }, getters: Getters) {
        const tableColumns = getters.tableColumns as TableColumn[];
        const columns = tableColumns.map(tableColumn => {
            if (!tableColumn.column || !actionColumns[tableColumn.column.name]) {
                return tableColumn;
            }
            return { ...tableColumn, type: ActionColumnsBase.ACTION_COLUMN_TYPE, width: 60 };
        });
        return columns;
    }
    private isActionTableCell(params: any) {
        if ((params.tableRow.type === Table.ROW_TYPE || params.tableRow.type === VirtualTable.ROW_TYPE) && params.tableColumn.type === ActionColumnsBase.ACTION_COLUMN_TYPE) {
            return true;
        }
        return false;
    }
    private isActionTableHeader(params: any) {
        if ((params.tableRow.type === TableHeaderRow.ROW_TYPE) && params.tableColumn.type === ActionColumnsBase.ACTION_COLUMN_TYPE) {
            return true;
        }
        return false;
    }
}
export const ActionColumns: React.ComponentType<IActionColumnsProps> & {
    ACTION_COLUMN_TYPE: symbol;
} = ActionColumnsBase;