// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderMain from '../components/Header/Header';
import { connect } from 'react-redux';
import NamesList from './99names/99names';

type IRenderNames = {
  FilterAlp: (payload: any) => void;
  Reset: (payload: any) => void;
  GetAmountNoneNames(): any;
};
type NamesProps = {
  Sort99names: any[];
};
type Props = IRenderNames & NamesProps;
interface IFilterAlp {
  FilterAlp: (payload: any) => void;
  Reset: (payload: any) => void;
  GetAmountNoneNames(): any;
}
function RenderNames(props: Props) {
  let alphabetChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let removeChar = 'ceopuvxyz'.split('');

  let vaildAlphabet = alphabetChar.filter(
    (item) => removeChar.indexOf(item) == -1
  );

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
          <div
            className='my-3'
            onClick={() => {
              FilterButton();
              props.GetAmountNoneNames();
            }}
          >
            <i className='fas ligthen-blue fa-filter'></i> Filter Names
          </div>
          {display ? (
            <div className='my-3 ml-3' onClick={props.Reset}>
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
                      onClick={() => props.FilterAlp(alphabet)}
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
function mapStateToProps(state: any) {
  return {
    Sort99names: state.Sort99names,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    FilterAlp: function (payload: any) {
      dispatch({ type: 'Filter', payload });
    },
    Reset: function (payload: any) {
      dispatch({ type: 'Reset' });
    },
    GetAmountNoneNames: function () {
      dispatch({ type: 'Names that are null' });
      return null;
    },
  };
}
export default connect<NamesProps, IFilterAlp>(
  mapStateToProps,
  mapDispatchToProps
)(RenderNames);
