import React from "react";

const Resultado = ({ total, plazo, cantidad }) => (
  <div className="u-full-width resultado">
    <h2>Resumen</h2>
    <p>
      Cantidad solicitada es: <b>$ {cantidad}</b>{" "}
    </p>
    <p>
      A pagar en: <b>{plazo} meses</b>
    </p>
    <p>
      Su pago mensual es de: <b>$ {(total / plazo).toFixed(2)}</b>
    </p>
    <p>
      Total a pagar: <b>$ {total.toFixed(2)}</b>
    </p>
  </div>
);

export default Resultado;
