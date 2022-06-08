import './App.css';

import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { MapaPage } from "./pages/MapaPage";
import {NotFoundPage} from "./pages/NotFoundPage"
import { CreateGrupoPage } from "./pages/CreateGrupoPage";
import {ListarGruposPage} from "./pages/ListarGruposPage";
import { createGrupo, getAllGrupos, updateGrupo } from './api/apiGrupo';
import { EditarGrupoPage } from './pages/EditarGrupoPage';

function App() {

  const navigate = useNavigate();
  const [allGrupos, setAllGrupos] = useState([]);
  
  useEffect(() => {
    fetchGrupos();
  }, []);

  const fetchGrupos = async () => {
    const res = await getAllGrupos();
    setAllGrupos(res);
  };

  const handleOnEdit = async (groupoId, grupo) => {
    const res = await updateGrupo(groupoId, grupo);
    const copyOfGroups = allGrupos.map((item) =>
      item._id === res._id ? grupo : item
    );
    setAllGrupos(copyOfGroups);
    navigate("/listar-grupos", {replace: true});
  };

  const handleOnSave = async (grupo) => {
    const savedGrupo = await createGrupo(grupo);
    if (savedGrupo) setAllGrupos([...allGrupos, savedGrupo]);
    navigate("/crear-grupo", {state:"",  replace: true });
  };

  const removeGroup = (id) => {
    const copyOfGroups = allGrupos.filter((item) => item._id !== id);
    setAllGrupos(copyOfGroups);
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<MapaPage allGrupos={allGrupos}/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="listar-grupos" 
              element={<ListarGruposPage grupos={allGrupos} />} 
        />
        <Route
          path="crear-grupo"
          element={<CreateGrupoPage onSave={handleOnSave} />}
        /> 
        <Route
          path="editar-grupo/:grupoId"
          element={<EditarGrupoPage onSave={handleOnEdit} removeGroup={removeGroup}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
