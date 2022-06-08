import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import "../styles/forms.css"

const GrupoForm = ({ onSave, grupo, onDelete}) => {

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

  const [newSaved, setNewSaved] = useState(false)
  const [newGroup, setNewGroup] = useState(defaultNewGroup);

  useEffect(() => {
    if (grupo)
      setNewGroup(grupo)
  }, [grupo])

  const handleOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    if(name === "lat-long") {
      let latlong = value.split(",");
      if (latlong.length === 2) {
        setNewGroup({ ...newGroup, "latitud": latlong[0], "longitud": latlong[1] });
      } else {
        event.target.value = "";
      }
    } else {
      setNewGroup({ ...newGroup, [name]: value });
    }
  }

  return (
    <div className="container fs-18">
      <form id='create-post-form' className="post-form" onSubmit={(e) => {
                e.preventDefault();
                if (grupo?._id)
                  onSave(grupo._id, newGroup)
                else {
                  onSave(newGroup);
                  setNewGroup(defaultNewGroup);
                  setNewSaved(true);
                }
              }}>
                {newSaved &&
                <>
                <div className="alert">
                  <span className="closebtn" onClick={(e) => { 
                    e.target.parentElement.style.display='none';
                    setNewSaved(false);}}>&times;</span>
                    Grupo guardado correctamente
                </div>
                </>}
          
          <p>Por favor, llena <b>todos</b> los campos del siguiente formulario.</p>
          <div className="row half">
            <div className="input-field">
              <label><b>Nombre del grupo de estudio</b></label>
              <input
                type="text"
                name="nombreGrupo"
                placeholder="Nombre del grupo"
                value={newGroup.nombreGrupo}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>
          <h2>Datos de contacto</h2>
          <hr/>
          <div className="row half">
            <div className="input-field">
              <label>Nombre del encargado</label>
                <input
                  type="text"
                  name="nombreEncargado"
                  placeholder="Nombre del encargado"
                  value={newGroup.nombreEncargado}
                  onChange={handleOnChange}
                  required
                />
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <label>Email de contacto</label>
              <input
                type="email"
                name="emailContacto"
                placeholder="hola@mail.com"
                value={newGroup.emailContacto}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Teléfono de contacto (10 dígitos)</label>
              <input
                type="text"
                name="telefonoContacto"
                placeholder="0123456789"
                value={newGroup.telefonoContacto}
                onChange={handleOnChange}
                pattern="\d*"
                maxLength="10"
                minLength="10"
                required
              />
            </div>
          </div>
          <h2>Ubicaci&oacute;n del Grupo de Estudio</h2>
          <hr/>
          <div className="row">
            <div className="input-field">
              <label>Calle</label>
              <input
                type="text"
                name="calle"
                placeholder="Calle"
                value={newGroup.calle}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Colonia</label>
              <input
                type="text"
                name="colonia"
                placeholder="Colonia"
                value={newGroup.colonia}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>
          <div className="row half">
            <div className="input-field">  
                <label>Número</label>
                  <input
                    type="text"
                    name="numero"
                    placeholder="Número"
                    value={newGroup.numero}
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
                value={newGroup.cp}
                onChange={handleOnChange}
                pattern="\d*"
                maxLength="5"
                minLength="5"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <label>Estado</label>
              <select 
              name="estado"
              value={newGroup.estado}  
              onChange={handleOnChange} 
              required>
                <option value="">Seleccione uno...</option>
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Baja California">Baja California</option>
                <option value="Baja California Sur">Baja California Sur</option>
                <option value="Campeche">Campeche</option>
                <option value="Chiapas">Chiapas</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="CDMX">Ciudad de México</option>
                <option value="Coahuila">Coahuila</option>
                <option value="Colima">Colima</option>
                <option value="Durango">Durango</option>
                <option value="Estado de México">Estado de México</option>
                <option value="Guanajuato">Guanajuato</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Hidalgo">Hidalgo</option>
                <option value="Jalisco">Jalisco</option>
                <option value="Michoacán">Michoacán</option>
                <option value="Morelos">Morelos</option>
                <option value="Nayarit">Nayarit</option>
                <option value="Nuevo León">Nuevo León</option>
                <option value="Oaxaca">Oaxaca</option>
                <option value="Puebla">Puebla</option>
                <option value="Querétaro">Querétaro</option>
                <option value="Quintana Roo">Quintana Roo</option>
                <option value="San Luis Potosí">San Luis Potosí</option>
                <option value="Sinaloa">Sinaloa</option>
                <option value="Sonora">Sonora</option>
                <option value="Tabasco">Tabasco</option>
                <option value="Tamaulipas">Tamaulipas</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Veracruz">Veracruz</option>
                <option value="Yucatán">Yucatán</option>
                <option value="Zacatecas">Zacatecas</option>
              </select>
            </div>
            <div className="input-field">
              <label>Municipio</label>
              <input
                type="text"
                name="municipio"
                placeholder="Municipio"
                value={newGroup.municipio}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>
          <div className="row half">
              {grupo?._id
               ? <>
                  <div className="input-field">
                  <label>Latitud</label>
                    <input
                      type="number"
                      name="latitud"
                      placeholder="Latitud"
                      value={newGroup.latitud}
                      onChange={handleOnChange}
                      required
                      step="any"
                      className="half"
                    />
                  </div>
                  <div className="input-field">
                  <label>Longitud</label>
                    <input
                      type="number"
                      name="longitud"
                      placeholder="Longitud"
                      value={newGroup.longitud}
                      onChange={handleOnChange}
                      required
                      step="any"
                      className="half"
                    />
                  </div>
                </>
               :<>
                <div className="input-field">
                <label>Coordenadas</label> 
                  <p className="small">Localiza la ubicación en Google Maps, haz click derecho y 
                   luego click en el par de números que aparecen. Se copiarán automátiamente.</p> 
                  <input
                    type="text"
                    name="lat-long"
                    placeholder="19.432, -99.1312"
                    onChange={handleOnChange}
                    required
                    value={newGroup.longitud}
                    className="half"
                  />
                </div>
                </>
              }

          </div>          
          <div className="buttons-container">
          {grupo?._id && 
            <Link to="/listar-grupos">
              Cancelar
            </Link>
          }
          {grupo?._id && 
            <button
              type="button"
              onClick={() => {
                console.log("Deleting group " + grupo._id );
                onDelete(grupo._id );
              }}
            > Borrar grupo
           </button> 
          }
            <button
              type="submit"
              value="Submit"
              >
              Guardar grupo
            </button> 
          </div>
      </form>
    </div>
  )
}

export default GrupoForm