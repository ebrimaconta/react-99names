// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import FilterCom from '../components/FilterCom/FilterCom';
import { connect, useDispatch } from 'react-redux';

import NamesList from './99names/99names';

type NamesProps = {
  Sort99names: string[];
  dispatch: any;
};

function RenderNames(props: NamesProps) {
  useEffect(() => {
    document.title = '99 Names Of Allaah Azza Wa Jal By Shaykh Ibn Uthymeen ';
  });

  return (
    <>
      <Header
        title=' 99 authentic names of Allah '
        author='Sheikh Ibn ‘Uthaymeen Rahimahullah '
        pdf={true}
      />
      <FilterCom />
      <Link to='/slider' className='flex justify-center mt-10 '>
        <div className='bg-black text-gd  w-20   text-center   h-16 flex items-center justify-center italian-font  border-solid border-2   border-gd  text-2xl capitalize py-10 px-16'>
          Slider
        </div>
      </Link>

      <NamesList />
    </>
  );
}
function mapStateToProps(state: any) {
  return {
    Sort99names: state.Sort99names,
  };
}

export default connect(mapStateToProps)(RenderNames);
