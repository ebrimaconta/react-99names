// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterButtonExp from '../components/FilterButton/FilterButton';

import NamesList from './99names/99names';

function RenderNames() {
  let alpat = 'abcdefghijklmnopqrstuvwxyz';
  let split = alpat.split('');
  let [display, setDisplay] = useState(false);
  const FilterButton = () => {
    setDisplay(!display);
  };
  useEffect(() => {
    document.title = '99 Names Of Allaah Azza Wa Jal By Shaykh Ibn Uthymeen ';
  });
  return (
    <>
      <header className='bg-space-blue overflow-hidden text-white h-full  flex flex-col items-center content-center justify-center pb-10'>
        <div className='text-center'>
          <div className='title-99-names capitalize text-3xl pt-10 animate__animated animate__fadeInDownBig '>
            99 authentic names of Allah
          </div>
          <div className='author capitalize text-2xl   animate__animated animate__fadeInUp animate__slower'>
            Sheikh Ibn ‘Uthaymeen Rahimahullah
          </div>
          <a
            href='pdf/99-names-new.pdf'
            className='my-10'
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className=' animate__animated capitalize animate__fadeInLeft  animate__slower py-3  bg-black px-5 my-10 text-2xl'>
              99 names of Allaah PDF
            </div>
          </a>
        </div>

        <Link to='/asmaquran' className='contents'>
          <div className='bg-space-red w-sm-xs lg:w-lg-sm text-center text-white h-20 flex items-center justify-center   animate__animated   animate__slideInRight animate__slower  text-2xl capitalize p-16'>
            Asma Quran (Names of the Quran)
          </div>
        </Link>
      </header>
      <div className='flex justify-center flex-col  items-center'>
        <div className='my-3' onClick={FilterButton}>
          <i className='fas fa-filter'></i> Filter Names
        </div>
        {display ? (
          <div className=' grid grid-cols-3 md:grid-cols-5 w-11/12 jusify-center gap-2 lg:flex mt-3 mb-6 lg:w-5/6'>
            {split.map((alpabet) => {
              return (
                <div className='xl:mx-1 bg-space-sm w-16 h-10 justify-self-center text-white text-center pt-2 '>
                  {alpabet}
                </div>
              );
            })}
          </div>
        ) : (
          ''
        )}
        <Link to='/slider' className='contents mt-10'>
          <div className='bg-black text-gd  w-20   text-center   h-16 flex items-center justify-center italian-font  border-solid border-2   border-gd  text-2xl capitalize py-10 px-16'>
            Slider
          </div>
        </Link>
      </div>
      <NamesList />
    </>
  );
}

export default RenderNames;
