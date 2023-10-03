import React from "react";

const Column = () => {
  return (
    <>
      <h2>Columnas con flex</h2>
      <section className="column">
        <div className="item item-column">uno</div>
        <div className="item item-column">dos</div>
        <div className="item item-column">tres</div>
        <div className="item item-column">cuatro</div>
        <div className="item item-column">cinco</div>
      </section>
    </>
  );
};

export default Column;
