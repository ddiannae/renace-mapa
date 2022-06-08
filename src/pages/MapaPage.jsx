import React from "react";
import Mapa from '../components/Mapa';

const MapaPage = ({ allGrupos }) => {
  return (
    <>
    <Mapa allGrupos={allGrupos}/>
    </>
  );
};

export {MapaPage};