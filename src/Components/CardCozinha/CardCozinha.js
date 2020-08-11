import React from 'react';
import './style.css';
import Button from '../Buttons';
import { firebaseStore } from '../../firebaseUtils';

const CardCozinha = (props) => {
  // const [items, setItems] = useState([]);

  function pedidoPronto() {
    firebaseStore.collection('pedidos').doc(props.obj.id).update({
      status: "Pronto"
    })
    .then(console.log('Pedido ' + props.obj.pedido + ' está pronto!'))
  }
  
  return (
    <div className="div-cozinha">
      <p className="numero-pedido">Pedido n°{props.obj.pedido}</p>
      <p className="mesa">Mesa: {props.obj.mesa}</p>
      <p className="cliente">Cliente: {props.obj.cliente}</p>
      <br></br>
      <ul className="lista">
        <li>

          {`${props.obj.order[0].quantidade} - ${props.obj.order[0].nameItem}`}

        </li>
      </ul>
      <br></br>
      <div className="div-btn">
        <Button className="btn-pronto" name="Pronto" value="Pronto" onClick={pedidoPronto}/>
      </div>
    </div>
  );
};

export default CardCozinha;
