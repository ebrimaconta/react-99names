import React, { Component } from 'react';
import { connect } from 'react-redux';
import db from '../../firebase/firebaseConfig';
 

type AsmaListProps = {
  Sort99names: any[];
};

type IState = {
  names: any;
  results: number;
  updated: boolean;
};

class AsmaList extends Component<AsmaListProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      names: this.props.Sort99names,
      results: 0,
      updated: false,
    };
  }
  componentDidUpdate(prevProps: AsmaListProps) {
    if (prevProps.Sort99names != this.props.Sort99names) {
      this.setState({
        names: this.props.Sort99names,
        results: this.props.Sort99names.length,
        updated: true,
      });
    }
  }

  render() {
    const { names, results, updated } = this.state;

    return (
      <>
        <div className='flex  flex-col justify-center  my-10'>
          <div className='text-center text-bl text-xl'>
            {updated && (
              <div className=''>
                <span className='bg-bl text-white p-1  w-full mr-3'>
                  Results <i className='fas fa-arrow-right'></i>
                </span>
                <span className='capitalize'>Number of Names: {results}</span>
              </div>
            )}
          </div>
          <div className='flex  flex-wrap justify-center  my-2'>
            {names
              ? names.map((name: any, index: any) => {
                  return (
                    <div
                      className=' pattern-one w-lg-xs m-5 pt-10 md:w-1/3 '
                      key={index}
                    >
                      <div className='flex flex-col items-center py-10'>
                        <div className='text-5xl'>{name.EnglishName} </div>
                        <div className='text-4xl'> {name.ArabicName} </div>
                        <div className='text-3xl text-center px-10 py-10'>
                          {name.meaning}
                        </div>
                      </div>
                    </div>
                  );
                })
              : 'There no names currently being displayed'}
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    Sort99names: state.Sort99names,
  };
}

export default connect(mapStateToProps)(AsmaList);
