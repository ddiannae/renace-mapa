import React from "react";
import GrupoForm from '../components/GrupoForm';
import NavBar from '../components/NavBar';


const CreateGrupoPage = ({onSave}) => {
  return (
    <>
     <NavBar />
      <GrupoForm
        onSave={onSave}
      />
    </>
  );
};

export {CreateGrupoPage};