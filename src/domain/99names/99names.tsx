import React, { Component } from 'react';
import { connect } from 'react-redux';

type AsmaListProps = {
  Sort99names: any[];
};

type IState = {
  names: any;
};

class AsmaList extends Component<AsmaListProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      names: this.props.Sort99names,
    };
  }
  componentDidUpdate(prevProps: AsmaListProps) {
    if (prevProps.Sort99names != this.props.Sort99names) {
      console.log(this.props.Sort99names);
      this.setState({ names: this.props.Sort99names });
    }
  }

  render() {
    const { names } = this.state;
    return (
      <>
        <div className='flex  flex-wrap justify-center  my-10'>
          {names.map((name: any, index: any) => {
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
          })}
          ;
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

function mapDispatchToProps(dispatch: any) {
  let payload = 'asc';
  return {
    SortFunc: function () {
      if (payload === 'asc') {
        payload = 'desc';
        dispatch({ type: 'Sort', payload });
      } else if (payload === 'desc') {
        payload = 'asc';
        dispatch({ type: 'Sort', payload });
      }
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AsmaList);
