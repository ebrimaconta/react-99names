// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function RenderAsma() {
  useEffect(() => {
    document.title = "SubhanAllaah page not found!!! what page are you looking for ?";
  });
  return (
    <>
      <div className="text-white  h-full flex flex-col items-center h-40 content-center justify-center ">
        <div className="text-center  w-full  h-48 bg-space-green pb-10">
          <div className="text-4xl capitalize animate__jackInTheBox  animate__animated animate__slow">404 error</div>
          <div className="text-3xl capitalize pt-10 animate__flipInX animate__animated  animate__slow " >
            Assalam alaykum what page are you looking for ?{" "}
          </div>
        </div>
        <div className="flex w-full h-screen ">
          <Link to="/" className="w-full h-48 contents">
            <div className="bg-space w-full text-center py-10 text-3xl capitalize flex flex-col  justify-center animate__slideInLeft animate__animated animate__slow">
              <p className="names capitalize"> 99 authentic names of Allah</p>
              <p className="author capitalize pt-3">
                by Sheikh Ibn ‘Uthaymeen <br/> Rahimahullah
              </p>
            </div>
          </Link>
          <Link to="/asma" className="w-full h-48 contents">
            <div className="bg-space-red w-full text-center  py-10 text-3xl capitalize flex flex-col  justify-center animate__slideInRight  animate__slow animate__animated">
              Asma Quran - Names of the quran
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RenderAsma;
