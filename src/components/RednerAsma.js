// eslint-disable-next-line no-unused-vars
import React, {useEffect } from 'react';
import { Link } from "react-router-dom";

import AsmaList from "../containers/asmaquran";

function RenderAsma() {
  useEffect(() => {
    document.title = "SubhanAllaah 404 errors!!! Where are you trying to go?";
  });
  return (
    <>
     <header className="bg-space-red text-white  flex flex-col items-center h-40 content-center justify-center">
          <div className="title-99-names capitalize text-3xl pt-10 animate__animated animate__fadeInDownBig ">
            Asma quran 
          </div>
          <div className="author capitalize text-2xl  my-8 animate__animated animate__fadeInUp animate__slower">
            Names of the quran 
          </div>
        </header>
      <Link to="/" className="">
        <div className="bg-space text-center text-white h-20 flex items-center justify-center  animate__animated   animate__slideInLeft text-2xl animate__slower capitalize py-5">
          99 names of Allaah
        </div>
      </Link>
      <AsmaList />
      </>
  );
};

export default RenderAsma;
