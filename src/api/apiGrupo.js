const URL_SERVER = `${process.env.REACT_APP_API_URL}/grupo/`;

export const getAllGrupos = async () => {
  try {
    const res = await fetch(URL_SERVER);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
export const getGrupoById = async (id) => {
  try {
    const res = await fetch(URL_SERVER + id);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const createGrupo = async (grupo) => {
  try {
    const res = await fetch(URL_SERVER, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(grupo),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateGrupo = async (id, grupo) => {
  try {
    const res = await fetch(URL_SERVER + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(grupo),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteGrupo = async (id) => {
  console.log(id)
  try {
    const res = await fetch(URL_SERVER + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
