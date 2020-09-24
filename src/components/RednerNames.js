// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import NamesList from "../containers/99names";
import Pdf from "../pdf/99-names-new.pdf";

const RenderNames = () => {
  return (
    <div>
      <div>
        <header className="bg-space text-white  flex flex-col items-center h-40 content-center justify-center">
          <div className="title-99-names capitalize text-3xl pt-10 animate__animated animate__fadeInDownBig ">
            99 Names Of Allaah
          </div>
          <div className="author capitalize text-2xl   animate__animated animate__fadeInUp animate__slower">
            Shaykh Ibn Uthymeen
          </div>
          <a href={Pdf} target="_blank">
            <div className=" animate__animated animate__fadeInLeft  py-3 bg-black px-5 my-10">
              99 names of Allaah PDF
            </div>
          </a>
        </header>
      </div>
      <Link to="/asmaquran">
        <div className="bg-space-red text-center text-white h-20 flex items-center justify-center py-5">
          Asma Quran (Names of the Quran)
        </div>
      </Link>

      <NamesList />
    </div>
  );
};

export default RenderNames;
