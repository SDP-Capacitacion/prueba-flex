import React from "react";

const Flex = () => {
  return (
    <>
      <h2>Filas</h2>
      <section className="row">
        <div className="item">uno</div>
        <div className="item">dos</div>
        <div className="item">tres</div>
        <div className="item">cuatro</div>
        <div className="item">cinco</div>
      </section>
      <h2>Columnas con flex</h2>
      <section className="column">
        <div className="item item-column">uno</div>
        <div className="item item-column">dos</div>
        <div className="item item-column">tres</div>
        <div className="item item-column">cuatro</div>
        <div className="item item-column">cinco</div>
      </section>
      <h2>Bloques paralelos</h2>
      <section className="section-block">
        <div className="block">
          <article className="item item-block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </article>
          <article className="item item-block">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </article>
          <article className="item item-block">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia
          </article>
          {/* <article className="item item-block">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia
            </article> */}
        </div>
      </section>
      <h2>Sidebar</h2>
      <section className="block-with-sidebar">
        <aside className="item-sidebar sidebar">sidebar</aside>
        <div className="item-sidebar content">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia
        </div>
      </section>
      <h2>Card</h2>
      <figure className="card">
        <figcaption className="item-card">header</figcaption>
        <figcaption className="item-card">content</figcaption>
        <figcaption className="item-card">footer</figcaption>
      </figure>
      <h2>Dos columnas con dos filas</h2>
      <section className="two-column">
        <article className="first-column">Columna uno</article>
        <sidebar className="second-column">
          <div className="item-one-column">Fila uno</div>
          <div className="item-two-column">Fila dos</div>
        </sidebar>
      </section>
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

export default Flex;
