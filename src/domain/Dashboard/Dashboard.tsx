import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import NameCard from '../AsmaQuran/NameCard';
import { db } from '../../firebase/firebaseConfig';
type IDashboard = {
  Sort99names: string[];
  users: any;
};
function Dashboard(props: IDashboard) {
  const [namesFromStore, setNames] = useState<string[]>([]);
  db.collection('users')
    .doc(`I9fQF4m9UNg2NNjWrLDuXihzrlr2`)
    .get()
    .then((doc: any) => {
      setNames(doc.data().names);
    });
  console.log(props);
  return (
    <>
      <Header title='Dashboard' />
      <div className='flex w-full justify-center'>
        {props.Sort99names.map((names: any, index: any) => {
          return (
            <>
              {namesFromStore.indexOf(index) > 1 && (
                <NameCard
                  key={index}
                  english={names.EnglishName}
                  arabic={names.ArabicName}
                  meaning={names.meaning}
                  references={names.reference}
                  id={index}
                />
              )}
            </>
          );
        })}
      </div>
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
