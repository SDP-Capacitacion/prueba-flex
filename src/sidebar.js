import React from "react";

const Sidebar = () => {
  return (
    <>
      <h2>Sidebar</h2>
      <section className="block-with-sidebar">
        <aside className="item-sidebar sidebar">sidebar</aside>
        <div className="item-sidebar content">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia
        </div>
      </section>
    </>
  );
};

export default Sidebar;
