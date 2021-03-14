// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

import QuranNameList from './NameList';

const RenderAsma = () => {
  useEffect(() => {
    document.title = 'Asma Quran - Names of Quran';
  });
  return (
    <>
      <Header title='Asma Quran' />
      <QuranNameList />
    </>
  );
};

export default RenderAsma;
