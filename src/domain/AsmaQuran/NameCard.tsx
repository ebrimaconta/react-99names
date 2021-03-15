import React, { Component } from 'react';
import { CardBack, CardFront, Card, CardInner } from './styledNamesCard';
import { db } from '../../firebase/firebaseConfig';
import fire from 'firebase';
type NameCardProp = {
  english: string;
  arabic: string;
  meaning: string;
  references?: string;
  users?: any;
  id: number;
};

function NameCard(props: NameCardProp) {
  const namesArr: number[] = [];
  const addToDashboard = (id: number) => {
    db.collection('users')
      .doc(`${props.users.user.uid}`)
      .get()
      .then((doc: any) => {
        namesArr.push(id);
        const concat = namesArr.concat(doc.data().names);
        const pushData = fire.firestore.FieldValue.arrayUnion(...concat);

        db.collection('users')
          .doc(`${props.users.user.uid}`)
          .update({
            names: pushData,
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
      });
  };
  return (
    <>
      <Card>
        {props.users && (
          <div
            className='flex justify-center'
            onClick={() => addToDashboard(props.id)}
          >
            Save to Dashboard
          </div>
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
