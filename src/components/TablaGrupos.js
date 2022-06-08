import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import Paper from '@mui/material/Paper';
import {
    SearchState,
    IntegratedFiltering,
    SortingState,
    IntegratedSorting,
    DataTypeProvider
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  TableColumnResizing,
  TableHeaderRow,
  SearchPanel,
  TableColumnVisibility
} from '@devexpress/dx-react-grid-material-ui';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {ActionColumns} from "./ActionColumns.tsx"

function TablaGrupos({grupos}) {

 const navigate = useNavigate();
    const [columns] = useState([
        {
            title: "ID",
            name: "_id"
        },
        {
            title: "Nombre del Grupo de Estudio",
            name: "nombreGrupo"
        }, {
            title: "Nombre del encargado",
            name: "nombreEncargado"
        }, {
            title: "Calle",
            name: "calle"
        }, {
            title: "Número",
            name: "numero"  
        }, {
            title: "Colonia",
            name: "colonia"
        }, {
            title: "Código Postal",
            name: "cp"
        }, {
            title: "Estado",
            name: "estado"
        }, {
            title: "Municipio",
            name: "municipio"  
        },  {
            title: "Última modificación",
            name: "updatedAt"
        }, { name: "Open" }
    ]);

    const [defaultColumnWidths] = useState([
        { columnName: 'nombreGrupo', width: 300 },
        { columnName: 'nombreEncargado', width: 300 },
        { columnName: 'calle', width: 150 },
        { columnName: 'numero', width: 100 },
        { columnName: 'colonia', width: 150 },
        { columnName: 'cp', width: 150 },
        { columnName: 'estado', width: 150 },
        { columnName: 'municipio', width: 150 },
        { columnName: 'updatedAt', width: 200 },
        { columnName: 'Open', width: 100 },
        { columnName: '_id', width: 0 }
    ]);

    const handleClickOpenDetails = (row) => {
        navigate(`/editar-grupo/${row["_id"]}`);
    }

    const [actionColumns] = useState([
        {
            columnName: "Open",
            label: "Open details",
            onClick: handleClickOpenDetails,
            icon: <MoreVertIcon />
          }
    ])

    const DateFormatter = ({ value }) => value.replace(/(\d{4})-(\d{2})-(\d{2})(.*)/, '$3-$2-$1');
    const DateTypeProvider = props => (
        <DataTypeProvider
          formatterComponent={DateFormatter}
          {...props}
        />
    );
      
    const [rows, setRows] = useState([]);
    const [dateColumns] = useState(['updatedAt']);
    const [columnWidths, setColumnWidths] = useState(defaultColumnWidths);
    const [defaultHiddenColumnNames] = useState(['_id']);

    useEffect(() => {
        setRows(grupos);
      }, [grupos]);

    return (
        <Paper>
            <Grid
            rows={rows}
            columns={columns}
            >
                <SearchState defaultValue="" />
                <IntegratedFiltering />
                <SortingState
                    defaultSorting={[{ columnName: 'estado', direction: 'asc' }]}
                />
                <IntegratedSorting />
                <DateTypeProvider
                    for={dateColumns}
                />
                <Table />
                <TableColumnResizing
                    columnWidths={columnWidths}
                    onColumnWidthsChange={setColumnWidths}
                    resizingMode = "widget"
                />
                <TableHeaderRow showSortingControls/>
                <TableColumnVisibility
                  defaultHiddenColumnNames={defaultHiddenColumnNames}
                />
                <Toolbar />
                <SearchPanel />
                <ActionColumns actionColumns={actionColumns} />
            </Grid>
        </Paper>
    );
  }

  export {TablaGrupos}