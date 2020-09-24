// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import NamesList from "../containers/99names";

const RenderNames = () => {
  return (
    <div>
      <Link to="/asmaquran">
        <div className="bg-space-red text-center text-white h-20 flex items-center justify-center">
          Asma Quran (Names of the Quran)
        </div>
      </Link>

      <NamesList />
    </div>
  );
};

export default RenderNames;
