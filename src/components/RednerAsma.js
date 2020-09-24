// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import AsmaList from "../containers/asmaquran";

const RenderAsma = () => {
  return (
    <div>
        <div>
     <header className="bg-space-red text-white  flex flex-col items-center h-40 content-center justify-center">
          <div className="title-99-names capitalize text-3xl pt-10 animate__animated animate__fadeInDownBig ">
            Asma quran 
          </div>
          <div className="author capitalize text-2xl  my-8 animate__animated animate__fadeInUp animate__slower">
            Names of the quran 
          </div>
        </header>
    </div>
      <Link to="/">
        <div className="bg-space text-center text-white h-20 flex items-center justify-center  py-5">
          99 names of Allaah
        </div>
      </Link>
      <AsmaList />
    </div>
  );
};

export default RenderAsma;
