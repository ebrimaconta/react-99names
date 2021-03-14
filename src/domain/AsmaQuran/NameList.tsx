import React, { Component } from 'react';
import { NameCard } from './NameCard';

import '../../assets/css/flip.css';

import styled from 'styled-components'

const CardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

type NameListProps = {
  names: any[];
};

export default class NameList extends Component<NameListProps> {

  render() {
    let cardElems = this.props.names.map((name, index) => 
    <NameCard key={index} english={name.EnglishName} arabic={name.ArabicName} meaning={name.meaning} references={name.source} />);

    return (
      <CardList>
        { cardElems }
      </CardList>
    );
  }
}


