import React from "react";
import "./Footer.css";

const footer = ({ copyright = "Todos los derechos reservados." }) => {
  return (
    <div className="footer">
      <div className="footer_logo">Pet's Shop</div>
    </div>
  );
};

export default footer;