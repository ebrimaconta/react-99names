import React from 'react';
import { getCookie } from '../../Cookie/Cookie';
export interface INavbar {}

export default function Navbar(props: INavbar) {
  return (
    <>
      <div className='lg:flex  relative items-center justify-center w-full text-2xl'>
        <div className='my-3  grid grid-cols-1 lg:flex  justify-center w-full self-center  '>
          {getCookie('uid') && (
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
