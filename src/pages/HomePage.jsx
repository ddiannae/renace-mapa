import React from "react";
import Mapa from '../components/Mapa';

const HomePage = ({ allGrupos }) => {
  return (
    <>
    <Mapa allGrupos={allGrupos}/>
    </>
  );
};

export {HomePage};