// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import NameList from './NameList';




const RenderAsma = (props: any) => {
  useEffect(() => {
    document.title = 'Asma Quran - Names of Quran';
  });
  return (
    <>
      <Header title='Asma Quran' />
      <NameList names={props.names} />
    </>
  );
};

function mapStateToProps(state: any) {
  return {
    names: state.asmaquran,
  };
}

export default connect(mapStateToProps)(RenderAsma);

