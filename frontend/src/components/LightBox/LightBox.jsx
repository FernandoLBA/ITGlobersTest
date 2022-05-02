import React from "react";
import "./styles.css";
import { MdCheckCircle } from "react-icons/md";

const LightBox = () => {
  return (
    <div className="lightBox">
      <div className="popup">
        <h2>¡Listo!</h2>
        <i>
          <MdCheckCircle />
        </i>
        <p>
          Tu información fue enviada con éxito, estaremos en contacto contigo.
        </p>
      </div>
    </div>
  );
};

export default LightBox;
