import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PDF from '../../pdf/99-names-new.pdf';
import { firebase, googleProvider, db } from '../../firebase/firebaseConfig';
import { connect, useDispatch } from 'react-redux';
import Navbar from './NavBar/Navbar';

export interface IHeader {
  title: string;
  pdf?: boolean;
  author?: string;
  users: any;
}

export interface User {}
function Header(props: IHeader) {
  const dispatch = useDispatch();

  const SignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        db.collection('users')
          .doc(`${res.user?.uid}`)
          .set({ id: res.user?.uid }, { merge: true })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
        dispatch({ type: 'GET_USER', payload: res });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        dispatch({ type: 'SIGNOUT' });
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
        {props.users.user ? (
          <div className='flex '>
            <div className='mx-5 bg-indigo-700 px-5 py-5 my-10 text-xl'>
              Hello {props.users.user?.displayName}
            </div>
            <div
              onClick={SignOut}
              className='mx-5 bg-indigo-700 px-5 py-5 my-10 text-xl'
            >
              Log Out
            </div>
          </div>
        ) : (
          <div className='flex '>
            <div
              onClick={SignIn}
              className='mx-5 bg-indigo-700 px-5 py-5 my-10 text-xl'
            >
              <i className='fab fa-google pr-3'></i> Sign In with Google
            </div>
          </div>
        )}
      </div>
      <Navbar dashboard={props.users.user} />
    </header>
  );
}
function mapStateToProps(state: any) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(Header);
