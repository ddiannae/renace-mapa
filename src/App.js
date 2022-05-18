import './App.css';

import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import {NotFoundPage} from "./pages/NotFoundPage"
import { CreateGrupoPage } from "./pages/CreateGrupoPage";
import { createGrupo, getAllGrupos } from './api/apiGrupo';

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

  const handleOnSave = async (grupo) => {
    const savedGrupo = await createGrupo(grupo);
    if (savedGrupo) setAllGrupos([...allGrupos, savedGrupo]);
    navigate("/", { replace: true });
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<HomePage allGrupos={allGrupos}/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="crear-grupo"
          element={<CreateGrupoPage onSave={handleOnSave} />}
        /> 
        {/* <Route index element={<HomePage allPosts={allPosts} />} />
        <Route
          path="create-post"
          element={<CreatePostPage onSave={handleOnSave} />}
        /> 
        <Route
          path="create-post/:postId"
          element={<CreatePostPage onSave={handleOnEdit} />}
        />
        <Route
          path="post/:postId"
          element={<DetailPostPage onDelete={handleOnDelete} />}
        />
        <Route path="*" element={<NotFoundPage />} />
        */}
      </Routes>
    </div>
  );
}

export default App;
