import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../assets/css/flip.css';

type AsmaListProps = {
  asmaquran: any[];
};

class AsmaList extends Component<AsmaListProps> {
  rednerList() {
    return this.props.asmaquran.map((name, index) => {
      return (
        <div
          key={index}
          className='flex flex-col items-center py-10 box h-lg-xs '
        >
          <div className='flip-box-inner '>
            <div className='flip-box-front pattern-two text-2xl'>
              <h2 className='pt-8'>{name.EnglishName} </h2>
              <h2 className='pt-5'> {name.meaning} </h2>
              <h2 className='pt-2 pb-10'> {name.ArabicName} </h2>
            </div>
            <div className='flip-box-back padding-one px-10 lg:py-7 lg:py-1'>
              <h2 className='lg:pt-8 pt-2 text-2xl'> {name.EnglishName} </h2>
              <h2> {name.source} </h2>
              <h2 className='pb-10 text-2xl py-3'> {name.meaning} </h2>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className='lg:flex w-full text-center asmaquran lg:flex-wrap justify-center  my-10'>
        {this.rednerList()};
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    asmaquran: state.asmaquran,
  };
}
export default connect(mapStateToProps)(AsmaList);
