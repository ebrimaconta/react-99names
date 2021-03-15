import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { matchPath } from 'react-router';
export interface INavbar {
  dashboard: any;
}

export default function Navbar(props: INavbar) {
  return (
    <>
      <div className='lg:flex  relative items-center justify-center w-full text-2xl'>
        <div className='my-3  grid grid-cols-1 lg:flex  justify-center w-full self-center  '>
          {props.dashboard && (
            <a
              href='/dashboard'
              className={`capitalize mx-4  cp justify-self-center`}
            >
              Dashboard
            </a>
          )}
          <a href='/' className={`capitalize mx-4  cp justify-self-center`}>
            99 names cards
          </a>

          <a
            href='/asmaquran'
            className={`capitalize mx-4 justify-self-center   cp `}
          >
            Asma Quran
          </a>
          <a href='' className={`capitalize mx-4 justify-self-center   `}>
            Apps we recommarded
          </a>
        </div>
      </div>
    </>
  );
}
