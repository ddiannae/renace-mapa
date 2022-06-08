import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import GrupoForm from '../components/GrupoForm';
import Popup from "../components/Popup";
import NavBar from '../components/NavBar';

import { getGrupoById, deleteGrupo } from "../api/apiGrupo";


const EditarGrupoPage = ({onSave, removeGroup}) => {

  const navigate = useNavigate();
  const params = useParams();
  const { grupoId } = params;
  
  const [grupo, setGrupo] = useState();
  const [popup, setPopup] = useState({
    show: false, // initial values set to false and null
    id: null,
  });

  useEffect(() => {
    getGrupoWithId(grupoId)
  }, [grupoId])

  const getGrupoWithId = async id => {
    if (id) {
      const grupo = await getGrupoById(id)
      if (grupo)
        setGrupo(grupo)
    }
  }

  const handleDelete = (id) => {
    setPopup({
      show: true,
      id,
    });
  };

  const handleDeleteTrue = async() => {
    if (popup.show && popup.id) {
      await deleteGrupo(popup.id);
      removeGroup(popup.id);
      navigate("/listar-grupos", {replace: true});
      setPopup({
        show: false,
        id: null,
      });
    }
  };

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
  };
  
  return (
    <>
     <NavBar />
      <GrupoForm
        grupo={grupo}
        onSave={onSave}
        onDelete={handleDelete}
      />
      {popup.show && (
        <Popup
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        />
      )}
    </>
     
  );
};

export {EditarGrupoPage};