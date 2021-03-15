import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from '../../firebase/firebaseConfig';
import NameCard from '../AsmaQuran/NameCard';

type Asma99NameListProps = {
  Sort99names: any[];
  users: any;
};

type IState = {
  names: any;
  results: number;
  updated: boolean;
};

class Asma99NameList extends Component<Asma99NameListProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      names: this.props.Sort99names,
      results: 0,
      updated: false,
    };
  }
  componentDidUpdate(prevProps: Asma99NameListProps) {
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
              ? names.map((name: any, index: number) => (
                  <NameCard
                    key={index}
                    dboption={true}
                    english={name.EnglishName}
                    arabic={name.ArabicName}
                    meaning={name.meaning}
                    references={name.reference}
                    id={index}
                    users={this.props.users}
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
    users: state.users,
  };
}

export default connect(mapStateToProps)(Asma99NameList);
