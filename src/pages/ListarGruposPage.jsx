import React from 'react';  
import NavBar from '../components/NavBar';
import {TablaGrupos} from '../components/TablaGrupos';


const ListarGruposPage = ({grupos}) => {
    
    return (  
        <>
        <NavBar />
        <TablaGrupos grupos={grupos} />
        </>      
    );
};

export {ListarGruposPage};