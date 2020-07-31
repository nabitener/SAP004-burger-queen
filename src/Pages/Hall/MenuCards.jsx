import React from 'react';
import { firebaseStore } from '../../firebaseUtils.js';
import Card from '../../Components/Cards/Cards.js';

function MenuCards(){
  // const ar = [<p> xxxxx</p>,<p> aaaaa</p>,<p> bbbbb</p>]
  // return ar
  
  return new Promise((resolve) => {
    resolve(
    firebaseStore.collection('menu').where('time', '==', 'Café da Manhã').get()
      .then((docs) => { 
        const itemArray = [];
        docs.forEach((doc) => {
          itemArray.push(doc.data());
        })
        return itemArray;
      })
      .then((items) => { 
        const compArray = [];
        items.forEach((comp) => {
          compArray.push(<Card key={items.indexOf(comp)} item_name={comp.item} price={comp.price}></Card>);
        })
        return (compArray);
      })
    )
  })
}

export default MenuCards;