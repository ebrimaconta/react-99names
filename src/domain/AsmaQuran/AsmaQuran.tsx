// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AsmaList from './AsmaQuranList';

function RenderAsma() {
  useEffect(() => {
    document.title = 'Asma Quran - Names of Quran';
  });
  return (
    <>
      <header className='bg-space-red overflow-hidden text-white h-full  flex flex-col items-center content-center justify-center pb'>
        <div className='title-99-names capitalize text-3xl pt-10 animate__animated animate__fadeInDownBig '>
          Asma quran
        </div>
        <div className='author capitalize text-2xl  my-8 animate__animated animate__fadeInUp animate__slower'>
          Names of the quran
        </div>

        <Link to='/' className=''>
          <div className='w-lg-sm bg-space-blue text-center text-white h-20 flex items-center justify-center  animate__animated   animate__slideInLeft text-2xl animate__slower capitalize py-5'>
            99 names of Allaah
          </div>
        </Link>
      </header>
      <AsmaList />
    </>
  );
}

export default RenderAsma;
