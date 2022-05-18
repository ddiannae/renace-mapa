import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import CrearGrupo from '../components/CrearGrupo';

import { getGrupoById } from "../api/apiGrupo";

const CreateGrupoPage = ({onSave}) => {
  const params = useParams()
  const { grupoId } = params
  
  const [grupo, setGrupo] = useState()

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

  return (
    <CrearGrupo
      grupo={grupo}
      onSave={onSave}
    />
  );
};

export {CreateGrupoPage};