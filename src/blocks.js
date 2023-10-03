import React from "react";

const Blocks = () => {
  return (
    <>
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
    </>
  );
};

export default Blocks;
