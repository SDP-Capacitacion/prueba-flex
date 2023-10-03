import React from "react";

const Flex = () => {
  return (
    <>
      <h2>Card</h2>
      <figure className="card">
        <figcaption className="item-card">header</figcaption>
        <figcaption className="item-card">content</figcaption>
        <figcaption className="item-card">footer</figcaption>
      </figure>
    </>
  );
};

export default Flex;
