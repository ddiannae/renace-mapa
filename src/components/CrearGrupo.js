import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import "../styles/forms.css"

const CrearGrupo = ({ onSave, grupo }) => {

  const defaultNewGroup = {
    nombreGrupo: '',
    nombreEncargado: '',
    estado: '',
    municipio: '',
    cp: '',
    colonia: '',
    calle: '',
    numero: '',
    telefonoContacto: '',
    emailContacto: '',
    latitud: '',
    longitud: '',
    updatedAt: (new Date()).toISOString(),
  }

  const [newGroup, setNewGroup] = useState(defaultNewGroup)

  useEffect(() => {
    if (grupo)
      setNewGroup(grupo)
  }, [grupo])

  const handleOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setNewGroup({ ...newGroup, [name]: value })
  }

  return (
    <div className="container">
      <form id='create-post-form' className="post-form">
        <div className="input-field">
          <label>Nombre del grupo</label>
          <input
            type="text"
            name="nombreEncargado"
            placeholder="Nombre del grupo"
            value={newGroup.title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-field">
        <label>Nombre del encargado</label>
          <input
            type="text"
            name="nombreGrupo"
            placeholder="Nombre del encargado"
            value={newGroup.title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-field">
        <label>Estado</label>
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            value={newGroup.title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-field">
        <label>Municipio</label>
          <input
            type="text"
            name="municipio"
            placeholder="Municipio"
            value={newGroup.title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-field">
        <label>Código Postal</label>
          <input
            type="text"
            name="cp"
            placeholder="Código Postal"
            value={newGroup.title}
            onChange={handleOnChange}
            pattern="\d*"
            maxlength="5"
            minlength="5"
            required
          />
        </div>
        <div className="input-field">
        <label>Colonia</label>
          <input
            type="text"
            name="colonia"
            placeholder="Colonia"
            value={newGroup.title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-field">
        <label>Calle</label>
          <input
            type="text"
            name="calle"
            placeholder="Calle"
            value={newGroup.title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-field">
        <label>Número</label>
          <input
            type="text"
            name="numero"
            placeholder="Número"
            value={newGroup.title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-field">
        <label>Teléfono de contacto</label>
          <input
            type="text"
            name="telefonoContacto"
            placeholder="Teléfono de contacto"
            value={newGroup.title}
            onChange={handleOnChange}
            pattern="\d*"
            maxlength="10"
            minlength="10"
          />
        </div>
        <div className="input-field">
        <label>Email de contacto</label>
          <input
            type="email"
            name="emailContacto"
            placeholder="Email de contacto"
            value={newGroup.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-field">
        <label>Latitud</label>
          <input
            type="text"
            name="latitud"
            placeholder="Latitud"
            value={newGroup.title}
            onChange={handleOnChange}
            required
            step="any"
          />
        </div>
        <div className="input-field">
        <label>Longitud</label>
          <input
            type="text"
            name="longitud"
            placeholder="Longitud"
            value={newGroup.title}
            onChange={handleOnChange}
            required
            step="any"
          />
        </div>
       

        <div className="buttons-container">
          <Link to="/">
            Cancelar
          </Link>
          <button
            type="button"
            disabled={newGroup.title === '' || newGroup.body === ''}
            onClick={() => {
              if (grupo?._id)
                onSave(grupo._id, newGroup)
              else
                onSave(newGroup)
            }}>
            Save grupo
          </button>
        </div>
      </form>
    </div>
  )
}

export default CrearGrupo