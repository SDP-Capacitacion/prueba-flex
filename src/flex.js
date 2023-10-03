import React from "react";
import Column from "./column";
import Blocks from "./blocks";
import Sidebar from "./sidebar";
import Card from "./card";
import ColumnRow from "./columnsrows";
import Allpages from "./all-page";
import Rows from "./rows";

const Flex = () => {
  return (
    <>
      <Rows />
      <Column />
      <Blocks />
      <Sidebar />
      <Card />
      <ColumnRow />
      <Allpages />
    </>
  );
};

export default Flex;
