import React, { useState, useEffect } from 'react';
import { CardBack, CardFront, Card, CardInner } from './styledNamesCard';
import { db } from '../../firebase/firebaseConfig';
import { getCookie } from '../../components/Cookie/Cookie';
import fire from 'firebase';
import { Redirect } from 'react-router';
type NameCardProp = {
  english: string;
  arabic: string;
  meaning: string;
  references?: string;
  dboption?: any;
  id: any;
  users?: any;
};

function NameCard(props: NameCardProp) {
  const [ids, setId] = useState<string[]>([]);
  const pathname = window.location.pathname;

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status
    db.collection('users')
      .doc(`${props.users?.user?.uid}`)
      .get()
      .then((doc) => {
        if (isMounted) setId(doc.data()?.names);
      });
    return () => {
      isMounted = false;
      setId([]);
    };
  }, [ids]);

  const namesArr: number[] = [];
  const addToDashboard = (id: number) => {
    db.collection('users')
      .doc(`${getCookie('uid')}`)
      .get()
      .then((doc: any) => {
        namesArr.push(id);
        const concat = namesArr.concat(doc.data().names);
        const pushData = fire.firestore.FieldValue.arrayUnion(...concat);

        db.collection('users')
          .doc(`${getCookie('uid')}`)
          .update({
            names: pushData,
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
        let getDocument = document.getElementsByClassName('change-des')[id];

        getDocument.innerHTML = `<a href='/dashboard'>Check Dashboard</a>`;
      });
  };
  const removeFromDB = (id: number) => {
    db.collection('users')
      .doc(`${getCookie('uid')}`)
      .get()
      .then((doc: any) => {
        const filter = doc
          .data()
          .names.filter((number: number) => number !== id);

        db.collection('users')
          .doc(`${getCookie('uid')}`)
          .update({
            names: filter,
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
      });
  };
  return (
    <>
      <Card>
        {props.users?.user && pathname === '/' ? (
          <>
            {ids?.length === 0 || ids?.indexOf(props.id) ? (
              <>
                <div
                  className='flex justify-center change-des w-full '
                  onClick={() => {
                    addToDashboard(props.id);
                  }}
                >
                  <i className='fas fa-plus pt-1 pr-3'></i> Save to Dashboard
                </div>
              </>
            ) : (
              <>
                <a
                  href='/dashboard'
                  className='flex justify-center change-des w-full '
                >
                  <i className='fas hover:underline fa-columns pt-1 pr-3'> </i>{' '}
                  Check Dashboard
                </a>
              </>
            )}
          </>
        ) : pathname === '/dashboard' ? (
          <>
            <div
              className='flex justify-center capitalize'
              onClick={() => removeFromDB(props.id)}
            >
              <i className='fas fa-minus pt-2 pr-3'></i>
              Remove from dashboard
            </div>
          </>
        ) : (
          ''
        )}

        <CardInner>
          <CardFront>
            <h2 className='ar-name'>{props.arabic}</h2>
            <h2 className='en-name'>{props.english}</h2>
            <span className='meaning'>{props.meaning}</span>
          </CardFront>
          <CardBack>{props.references}</CardBack>
        </CardInner>
      </Card>
    </>
  );
}

export default NameCard;
