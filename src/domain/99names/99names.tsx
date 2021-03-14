import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from '../../firebase/firebaseConfig';
import NameCard from '../AsmaQuran/NameCard';

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
      console.log(this.props.Sort99names);
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
              ? names.map((name: any, index: number) => (
                  <NameCard
                    key={index}
                    english={name.EnglishName}
                    arabic={name.ArabicName}
                    meaning={name.meaning}
                    references={name.reference}
                  />
                ))
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
