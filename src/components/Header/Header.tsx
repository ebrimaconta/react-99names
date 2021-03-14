import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PDF from '../../pdf/99-names-new.pdf';
import { db, auth, googleProvider } from '../../firebase/firebaseConfig';

import Navbar from './NavBar/Navbar';

export interface IHeader {
  title: string;
  pdf?: boolean;
  author?: string;
}

export default function Header(props: IHeader) {
  const SignIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res);
        /*   db.collection('google-users').doc('users').set({
          id: '',
        }); */
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <header>
      <div className='text-center min-w bg-space-blue overflow-hidden text-white   flex flex-col items-center content-center justify-center py-10 h-full'>
        <div className='title-99-names mt-3  pt-2 capitalize text-3xl animate__animated animate__fadeInDownBig '>
          {props.title}
        </div>
        <div className='author capitalize text-2xl   animate__animated animate__fadeInUp animate__slower'>
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
        <div className='flex '>
          <div
            onClick={SignIn}
            className='mx-5 bg-indigo-700 px-5 py-5 my-10 text-xl'
          >
            <i className='fab fa-google pr-3'></i> Sign In with Google
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
