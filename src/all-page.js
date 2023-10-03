import React from "react";

const Allpages = () => {
  return (
    <>
      <h2>A toda página</h2>
      <section className="all-page">
        <article>Columnas</article>
        <article className="row-item">
          <div className="all-page-item">columna uno</div>
          <div className="all-page-item">columna dos</div>
          <div className="all-page-item">columna tres</div>
        </article>
      </section>
    </>
  );
};

export default Allpages;
