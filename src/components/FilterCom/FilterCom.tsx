import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function FilterCom() {
  const dispatch = useDispatch();

  let [display, setDisplay] = useState(false);
  let alphabetChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let removeChar = 'ceopuvxyz'.split('');
  let vaildAlphabet = alphabetChar.filter(
    (item) => removeChar.indexOf(item) == -1
  );
  const FilterButton = () => {
    setDisplay(!display);
  };
  const ScrollButton = () => {
    if (window.innerWidth <= 600) {
      window.scrollTo({
        top: 1000,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 740,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <div className='flex justify-center flex-col mt-6 items-center'>
        <div className='flex flex-col'>
          <div className='flex text-xl mr-3 justify-center  '>
            <div
              className='my-3'
              onClick={() => {
                FilterButton();
              }}
            >
              <i className='fas ligthen-blue fa-filter'></i> Filter Names
            </div>
            {display ? (
              <div
                className='my-3 ml-3'
                onClick={() => {
                  dispatch({ type: 'RESET' });
                  ScrollButton();
                }}
              >
                <i className='fas ligthen-blue  fa-sync-alt fa-rotate-90'></i>{' '}
                Reset Names
              </div>
            ) : (
              ''
            )}
          </div>
          {display ? (
            <div className=''>
              <div className='flex flex-col items-center'>
                <div className=' grid grid-cols-3 md:grid-cols-5 w-4/5  gap-2 lg:flex mt-3 mb-6 '>
                  {vaildAlphabet.map((alphabet) => {
                    return (
                      <div
                        key={alphabet}
                        onClick={() => {
                          dispatch({ type: 'FILTER', payload: alphabet });
                          ScrollButton();
                        }}
                        className='filter-1 space-bg-blue xl:mx-1 text-blue  w-16 h-10 justify-self-center   text-center pt-2 '
                      >
                        <span>{alphabet} </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex flex-col '>
                  <div className='flex justify-center '>
                    There are no names with{' '}
                    <i className='fas fa-level-down-alt ml-3'></i>
                  </div>
                  <div className='grid grid-cols-5  w-11/12  lg:flex  justify-center sm:flex flex-row   mt-3 mb-6 lg:w-full'>
                    {removeChar.map((alphabet) => {
                      return (
                        <div
                          key={alphabet}
                          className='  bg-gray-700     text-white  w-16 h-10 justify-self-center   text-center pt-2 '
                        >
                          <span>{alphabet} </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
