import React from "react";
import { useState } from "react";
import { handleValidate, handleSubmit, handlePopUp } from "../../helpers/";
import "./styles.css";

const Form = ({ airline }) => {
  const [state, setState] = useState({});
  const [popup, setPopup] = useState(false);

  return (
    <div className="form">
      <h3 className="welcome">
        Hola, bienvenido, sabemos que quieres viajar en un
        <span> {airline}</span>, por favor diligencia el siguiente formulario:
      </h3>

      <div className="formulario">
        <h3>Formulario de registro</h3>
        <form
          onSubmit={(e) => {
            handleSubmit(e, state, setState) && setPopup(!popup);
          }}
        >
          <div className="input">
            <label htmlFor="fullName">
              Nombre completo <span className="required">*</span>
            </label>
            <input
              type="text"
              required
              id="fullName"
              name="fullName"
              value={state.fullName || ""}
              onChange={(e) => {
                handleValidate(e);
                setState({ ...state, [e.target.name]: e.target.value });
              }}
            />
            <span className="tips">No se permiten caracteres especiales</span>
          </div>

          <div className="input">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              maxLength={255}
              required
              id="email"
              name="email"
              value={state.email || ""}
              onChange={(e) => {
                handleValidate(e);
                setState({ ...state, [e.target.name]: e.target.value });
              }}
            />
            <span className="tips">No se permiten caracteres especiales</span>
          </div>

          <div className="input">
            <label htmlFor="celular">
              Celular <span className="required">*</span>
            </label>
            <input
              type="text"
              maxLength={20}
              required
              id="celular"
              name="celular"
              value={state.celular || ""}
              onChange={(e) => {
                handleValidate(e);
                setState({ ...state, [e.target.name]: e.target.value });
              }}
            />
            <span className="tips">No permite caracteres especiales</span>
          </div>

          <div className="input">
            <label htmlFor="rangoEdad">
              Edad <span className="required">*</span>
            </label>
            <input
              type="text"
              required
              maxLength="3"
              id="rangoEdad"
              name="rangoEdad"
              value={state.rangoEdad || ""}
              onChange={(e) => {
                handleValidate(e);
                setState({ ...state, [e.target.name]: e.target.value });
              }}
            />
            <span className="tips">Rango: entre 18 y 100 años</span>
          </div>

          <input className="btn" type="submit" value="Enviar" />
        </form>
      </div>

      {popup && handlePopUp(popup, setPopup)}
    </div>
  );
};

export default Form;
