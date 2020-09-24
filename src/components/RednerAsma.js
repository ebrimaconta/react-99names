// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import AsmaList from "../containers/asmaquran";

const RenderAsma = () => {
  return (
    <div>
      <Link to="/">
        <div className="bg-space text-center text-white h-20 flex items-center justify-center">
          99 names of Allaah
        </div>
      </Link>
      <AsmaList />
    </div>
  );
};

export default RenderAsma;
