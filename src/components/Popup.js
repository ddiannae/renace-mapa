import React from "react"
import "../styles/modal.css"
import "../styles/forms.css"

function Popup({ handleDeleteTrue, handleDeleteFalse}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>¿Estás seguro de que deseas eliminar este grupo?</p>
        <div className="buttons-container">
          <button onClick={handleDeleteFalse}>Cancelar</button>
          <button onClick={handleDeleteTrue}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;