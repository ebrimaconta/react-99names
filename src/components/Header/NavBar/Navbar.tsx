import { constants } from 'buffer';
import React from 'react';
import { getCookie } from '../../Cookie/Cookie';
export interface INavbar {}

export default function Navbar(props: INavbar) {
  const pathname = window.location.pathname;
  let isTrue = (name: string) => {
    return pathname === name && 'bg-indigo-800 my-3 lg:-mt-2  p-3 text-white';
  };
  return (
    <>
      <div className='lg:flex  relative items-center justify-center w-full text-2xl'>
        <div className='my-3   grid grid-cols-1 lg:flex  justify-center w-full self-center  '>
          {getCookie('uid') && (
            <a
              href='/dashboard'
              className={`capitalize mx-4 ${isTrue(
                '/dashboard'
              )}  cp justify-self-center`}
            >
              Dashboard
            </a>
          )}
          <a
            href='/'
            className={`capitalize mx-4  ${isTrue('/')} cp justify-self-center`}
          >
            99 names cards
          </a>

          <a
            href='/asmaquran'
            className={`capitalize mx-4 justify-self-center   ${isTrue(
              '/asmaquran'
            )}  cp `}
          >
            Asma Quran
          </a>
          <a
            href=''
            className={`capitalize mx-4   ${isTrue(
              '#'
            )}  justify-self-center   `}
          >
            Apps we recommarded
          </a>
        </div>
      </div>
    </>
  );
}
