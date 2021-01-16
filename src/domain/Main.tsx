// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderMain from '../components/Header/Header';
import { connect } from 'react-redux';
import NamesList from './99names/99names';

type IRenderNames = {
  FilterAlp: (payload: any) => void;
  Reset: (payload: any) => void;
};

interface IFilterAlp {
  FilterAlp: (payload: any) => void;
  Reset: (payload: any) => void;
}
function RenderNames(props: IRenderNames) {
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
      <HeaderMain />
      <div className='flex justify-center flex-col  items-center'>
        <div className='flex text-xl  '>
          <div className='my-3' onClick={FilterButton}>
            <i className='fas ligthen-blue fa-filter'></i> Filter Names
          </div>
          {display ? (
            <div className='my-3 ml-3' onClick={props.Reset}>
              <i className='fas ligthen-blue  fa-sync-alt'></i> Reset Names
            </div>
          ) : (
            ''
          )}
        </div>
        {display ? (
          <div className=' grid grid-cols-3 md:grid-cols-5 w-11/12 jusify-center gap-2 lg:flex mt-3 mb-6 lg:w-5/6'>
            {split.map((alpabet) => {
              return (
                <div
                  key={alpabet}
                  onClick={() => props.FilterAlp(alpabet)}
                  className='filter-1 space-bg-blue xl:mx-1 text-blue  w-16 h-10 justify-self-center   text-center pt-2 '
                >
                  <span>{alpabet} </span>
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

function mapDispatchToProps(dispatch: any) {
  return {
    FilterAlp: function (payload: any) {
      dispatch({ type: 'Filter', payload });
    },
    Reset: function (payload: any) {
      dispatch({ type: 'Reset' });
    },
  };
}
export default connect<{}, IFilterAlp>(null, mapDispatchToProps)(RenderNames);
