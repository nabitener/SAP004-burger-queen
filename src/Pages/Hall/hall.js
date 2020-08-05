import React, { useState, useEffect } from 'react';
import Pedidos from '../../Pedidos';
import './style.css';
import '../../reset.css';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Inputs';
import Card from '../../Components/Cards/Cards';
import { firebaseStore } from '../../firebaseUtils';

const Hall = () => {
  const [cafe, setCafe] = useState(true);
  const [tarde, setTarde] = useState(false);
  const [menuCafe, setMenuCafe] = useState([]);
  const [menuTarde, setMenuTarde] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    console.log(menuCafe);
    console.log(menuTarde);
  }, [menuCafe, menuTarde]);

  useEffect(() => {
    createMenuCafe();
    createMenuTarde();
  }, []);


  const createMenuCafe = () => {
    firebaseStore
      .collection('menu')
      .where('time', '==', 'Café da Manhã')
      .get()
      .then((querySnapshot) => {
        const newArray = querySnapshot.docs.map((doc) => doc.data());
        setMenuCafe(newArray);
      });
  };

  const createMenuTarde = () => {
    firebaseStore
      .collection('menu')
      .where('time', '==', 'Almoço e Jantar')
      .get()
      .then((querySnapshot) => {
        const newArray = querySnapshot.docs.map((doc) => doc.data());
        setMenuTarde(newArray);
      });
  };

 
  const callCafe = () => {
    setCafe(!cafe);
    setTarde(!tarde);
  };

  const callTarde = () => {
    setTarde(!tarde);
    setCafe(!cafe);
  };

  const formarPedido = (e) => {
    console.log(e.target.id)
  }

  return (
    <main className="main-hall">
      <Header />
      <div className="div-hall">
        <div className="tabs-container">
          <Input
            type="radio"
            name="menu"
            className="tabs"
            id="tab1"
            value="cafe"
            checked={cafe === true}
            onChange={() => callCafe()}
          />
          <label className="label" htmlFor="tab1">
            Café da Manhã
          </label>
          <div className="div-conteudo">
            {menuCafe.map((element) => (
              <Card
                key={element.item + element.price}
                idCard={element.item}
                name={element.price}
                item_name={element.item}
                price={element.price}
                handleclick={formarPedido}
              />
            ))}
          </div>
          <Input
            type="radio"
            name="menu"
            className="tabs"
            id="tab2"
            value="tarde"
            checked={tarde === true}
            onChange={() => callTarde()}
          />
          <label className="label" htmlFor="tab2">
            Almoço e Jantar
          </label>
          <div className="div-conteudo">
            {menuTarde.map((element) => (
              <Card
                key={element.item + element.price}
                idCard={element.item}
                name={element.price}
                item_name={element.item}
                price={element.price}
                handleclick={formarPedido}
              />
            ))}
          </div>
        </div>
        <Pedidos newPedidos={pedidos}/>
      </div>
    </main>
  );
};

export default Hall;
