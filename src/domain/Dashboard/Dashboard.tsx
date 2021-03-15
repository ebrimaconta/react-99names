import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import NameCard from '../AsmaQuran/NameCard';
import { db } from '../../firebase/firebaseConfig';
type IDashboard = {
  Sort99names: string[];
};
function Dashboard(props: IDashboard) {
  return (
    <>
      <Header title='Dashboard' />
    </>
  );
}

function mapStateToProps(state: any) {
  return {
    Sort99names: state.Sort99names,
  };
}

export default connect(mapStateToProps)(Dashboard);
