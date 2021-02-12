import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PDF from '../../pdf/99-names-new.pdf';

import Navbar from './NavBar/Navbar';

export interface IHeader {
  title: string;
  pdf?: boolean;
  author?: string;
}

export default function Header(props: IHeader) {
  const [data, setData] = useState();

  return (
    <header className=' '>
      <div className='text-center min-w bg-space-blue overflow-hidden text-white   flex flex-col items-center content-center justify-center py-10 h-full'>
        <div className='title-99-names mt-3  pt-2 capitalize text-3xl animate__animated animate__fadeInDownBig '>
          {/*  99 authentic names of Allah */}
          {props.title}
        </div>
        <div className='author capitalize text-2xl   animate__animated animate__fadeInUp animate__slower'>
          {/*  Sheikh Ibn ‘Uthaymeen Rahimahullah */}
          {props.author}
        </div>
        {props.pdf ? (
          <a
            href={PDF}
            className='my-12 '
            rel='noopener noreferrer'
            target='_blank'
          >
            <div
              className={` animate__animated capitalize animate__fadeInLeft  animate__slower py-3  bg-black px-5 my-10 text-2xl`}
            >
              99 names of Allaah PDF
            </div>
          </a>
        ) : (
          ''
        )}
      </div>
      <Navbar />
    </header>
  );
}
