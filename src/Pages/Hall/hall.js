import React, { useState, useEffect } from 'react';
import Pedidos from '../../Components/Pedidos/Pedidos';
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
  const [total, setTotal] = useState('');

  useEffect(() => {}, [menuCafe, menuTarde, pedidos]);

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
    e.preventDefault();
    let arrayItem = {
      nameItem: e.currentTarget.id,
      priceItem: parseInt(e.currentTarget.value),
      quantidade: parseInt(1),
    };
    setPedidos([...pedidos, arrayItem]);
    resultadoTotal([...pedidos, arrayItem])
  };

  const excluir = (item, name) => {
    setPedidos(item.filter((element) => element.nameItem !== name));
  };

  const menos = (item, name) => {
    setPedidos(
      item.filter((element) => {
        if (element.nameItem === name && element.quantidade > 0) {
          return element.quantidade--;
        } else {
        return element.quantidade=0 
        }
      })
    );
  };

  const mais = (item, name) => {
    setPedidos(
      item.filter((element) =>
        element.nameItem === name ? element.quantidade++ : element.quantidade
      )
    );
  };

  const resultadoTotal = (pedidos) => {
    let totalPedido = parseInt(0);
    pedidos.map((element) => {
      return (totalPedido += parseInt(element.priceItem));
    });
    setTotal(totalPedido);
  };
 
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
                key={element.item}
                idCard={element.item}
                name={element.item}
                value={element.priceItem}
                price={element.price}
                option={element.subItem}
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
                key={element.item}
                idCard={element.item}
                name={element.item}
                value={element.priceItem}
                price={element.price}
                option={element.subItem}
                handleclick={formarPedido}
              />
            ))}
          </div>
        </div>
        <Pedidos
          delete={excluir}
          soma={mais}
          subtrair={menos}
          total={total}
          newPedido={pedidos}
        />
      </div>
    </main>
  );
};

export default Hall;
