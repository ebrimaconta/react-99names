// eslint-disable-next-line no-unused-vars
import React, {useEffect } from 'react';
import { Link } from "react-router-dom";

import NamesList from "../containers/99names";
import Pdf from "../pdf/99-names-new.pdf";

function RenderNames() {
  useEffect(() => {
    document.title = "99 Names Of Allaah Azza Wa Jal By Shaykh Ibn Uthymeen ";
  });
  return (
    <>
        <header className="bg-space-blue overflow-hidden text-white h-full  flex flex-col items-center content-center justify-center pb-10">
         <div className="text-center">
         <div className="title-99-names capitalize text-3xl pt-10 animate__animated animate__fadeInDownBig ">
           99 authentic names of Allah
          </div>
          <div className="author capitalize text-2xl   animate__animated animate__fadeInUp animate__slower">
          Sheikh Ibn ‘Uthaymeen Rahimahullah
          </div>
          <a href={Pdf} className="my-10" rel="noopener noreferrer" target="_blank">
            <div className=" animate__animated capitalize animate__fadeInLeft  animate__slower py-3  bg-black px-5 my-10 text-2xl">
              99 names of Allaah PDF
            </div>
          </a>
          </div>
       
      <Link to="/asmaquran" className="contents">
        <div className="bg-space-red w-56  w-sm-xs lg:w-lg-sm text-center text-white h-20 flex items-center justify-center   animate__animated   animate__slideInRight animate__slower  text-2xl capitalize p-16">
          Asma Quran (Names of the Quran)
        </div>
      </Link>
      </header>
      <NamesList />
   </>
  );
};

export default RenderNames;
