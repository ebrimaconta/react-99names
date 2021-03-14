import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NameCard } from './NameCard';

import '../../assets/css/flip.css';

import styled from 'styled-components'

const CardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

type AsmaListProps = {
  asmaquran: any[];
};


class QuranNameList extends Component<AsmaListProps> {

  render() {
    let cardElems = this.props.asmaquran.map((name, index) => 
    <NameCard key={index} english={name.EnglishName} arabic={name.ArabicName} meaning={name.meaning} references={name.source}/>);

    return (
      <CardList>
        { cardElems}
      </CardList>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    asmaquran: state.asmaquran,
  };
}
export default connect(mapStateToProps)(QuranNameList);
