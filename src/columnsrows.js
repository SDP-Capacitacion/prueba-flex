import React from "react";

const ColumnRow = () => {
  return (
    <>
      <h2>Dos columnas con dos filas</h2>
      <section className="two-column">
        <article className="first-column">Columna uno</article>
        <sidebar className="second-column">
          <div className="item-one-column">Fila uno</div>
          <div className="item-two-column">Fila dos</div>
        </sidebar>
      </section>
    </>
  );
};

export default ColumnRow;
