import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import NameCard from '../AsmaQuran/NameCard';
import { db } from '../../firebase/firebaseConfig';
import { getCookie } from '../../components/Cookie/Cookie';
import { Redirect } from 'react-router';
type IDashboard = {
  Sort99names: string[];
  users: any;
};
function Dashboard(props: IDashboard) {
  const [namesFromStore, setNames] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status
    db.collection('users')
      .doc(`${getCookie('uid')}`)
      .get()
      .then((doc) => {
        if (isMounted) setNames(doc.data()?.names);
      });
    return () => {
      isMounted = false;
    };
  });
  return (
    <>
      <Header title='Dashboard' />
      {props.users.user ? (
        <div className='flex justify-center'>
          <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2'>
            {props.Sort99names.map((names: any, index: any) => {
              return (
                <React.Fragment key={index}>
                  {namesFromStore ? (
                    namesFromStore.indexOf(index) !== -1 && (
                      <NameCard
                        key={index}
                        english={names.EnglishName}
                        arabic={names.ArabicName}
                        meaning={names.meaning}
                        references={names.reference}
                        id={index}
                      />
                    )
                  ) : (
                    <div className=''>
                      Please go to <a href='/'>99 names</a> and click a save to
                      dashboard to see a card appear on the dashbaord
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
}

function mapStateToProps(state: any) {
  return {
    Sort99names: state.Sort99names,
    users: state.users,
  };
}

export default connect(mapStateToProps)(Dashboard);
