// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import NameList from './NameList';




const QuranNameList = (props: any) => {
  useEffect(() => {
    document.title = 'Quran';
  });
  return (
      <div>
        <Header title='Quran' />
        <NameList names={props.names} />
      </div>
  );
};

function mapStateToProps(state: any) {
  return {
    names: state.asmaquran,
  };
}

export default connect(mapStateToProps)(QuranNameList);

