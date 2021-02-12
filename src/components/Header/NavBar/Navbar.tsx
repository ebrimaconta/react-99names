import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { matchPath } from 'react-router';
export interface INavbar {
  match?: any;
}

export default function Navbar(props: INavbar) {
  console.log(props);
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  let home = '';
  let aq = '';
  let app = '';
  let getUrl = window.location.toString();
  if (getUrl.slice(-1) === '/') {
    home = 'bb';
  } else {
    aq = 'bb';
  }

  return (
    <>
      <div className='lg:flex  relative items-center justify-center w-full text-2xl'>
        <div className='my-3  grid grid-cols-1 lg:flex  justify-center w-full self-center  '>
          <a href='/' className={`capitalize mx-4 ${home} justify-self-center`}>
            99 names cards
          </a>
          <a
            href='/asmaquran'
            className={`capitalize mx-4 justify-self-center  ${aq} `}
          >
            Asma Quran
          </a>
          <a href='' className={`capitalize mx-4 justify-self-center  ${app} `}>
            Apps we recommarded
          </a>
        </div>
      </div>
    </>
  );
}
