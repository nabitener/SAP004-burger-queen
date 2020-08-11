import React, { useState, useEffect } from 'react';
import Pedidos from '../../Components/Pedidos/Pedidos';
import './style.css';
import '../../reset.css';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Inputs';
import Card from '../../Components/Cards/Cards';
import PedidosProntos from '../../Components/PedidosProntos/PedidosProntos';
import { firebaseStore } from '../../firebaseUtils';

const Hall = () => {
  const [cafe, setCafe] = useState(true);
  const [tarde, setTarde] = useState(false);
  const [pronto, setPronto] = useState(false);
  const [menuCafe, setMenuCafe] = useState([]);
  const [menuTarde, setMenuTarde] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {}, [menuCafe, menuTarde, pedidos, total]);

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

  const abaCafe = () => {
    setTarde(false);
    setCafe(true);
    setPronto(false);
  };

  const abaTarde = () => {
    setTarde(true);
    setCafe(false);
    setPronto(false);
  };

  const abaPronto = () => {
    setTarde(false);
    setCafe(false);
    setPronto(true);
  };

  const formarPedido = (e) => {
    e.preventDefault();
    let arrayItem = {
      nameItem: e.currentTarget.id,
      priceItem: parseInt(e.currentTarget.value),
      quantidade: parseInt(1),
    };
    console.log(pedidos)
    const filtro = pedidos.some((element) => {
      return element.nameItem === arrayItem.nameItem;
    });
    if(filtro){
      return mais(pedidos, arrayItem.nameItem);
    }else{
      return novoPedido(pedidos, arrayItem);      
    }
  }

  const novoPedido = (pedidos, arrayItem) => {
    setPedidos([...pedidos, arrayItem]);
    resultadoTotal([...pedidos, arrayItem]);
  };

  const excluir = (item, name) => {
    let dados = item.filter((element) => element.nameItem !== name);
    setPedidos(dados);
    resultadoTotal(dados);
  };

  const menos = (item, index) => {	
    if (item[index].quantidade > 0) {	
      item[index].quantidade--;	
    } else {	
      excluir(item, item.nameItem);	
    }
    setPedidos([...pedidos]);
    resultadoTotal([...pedidos]);	
  };

  const mais = (item, name) => {
    setPedidos(
      item.filter((element) =>
        element.nameItem === name ? element.quantidade++ : element.quantidade
      )
    );
    resultadoTotal([...pedidos]);
  };

  const resultadoTotal = (pedidos) => {
    let totalPedido = parseInt(0);
    pedidos.map((element) => {
      totalPedido += parseInt(element.priceItem)*parseInt(element.quantidade)
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
            onChange={() => abaCafe()}
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
                options={element.subItem}
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
            onChange={() => abaTarde()}
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
                options={element.subItem}
                handleclick={formarPedido}
              />
            ))}
          </div>
          <Input
            type="radio"
            name="menu"
            className="tabs"
            id="tab3"
            value="pronto"
            checked={pronto === true}
            onChange={() => abaPronto()}
          />
          <label className="label" htmlFor="tab3">
            Pedidos Prontos
          </label>
          <div className="div-conteudo">
            <PedidosProntos />
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
