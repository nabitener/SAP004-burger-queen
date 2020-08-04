import React from 'react';
import './style.css';
import Menos from '../../Image/menos.png';
import Mais from '../../Image/mais.png';

const Td = (props) => {
  return (
    <>
      <tr>
        <td key={props.key} item={props.item}>
          {props.item}
        </td>
        <td key={props.key} quantidade={props.quantidade}>
            <img src={Menos} className="img-menos btn-quant" alt="img-menos" handleclick={props.img}></img>
          {props.quantidade}
            <img src={Mais} className="img-mais btn-quant" alt="img-mais" handleclick={props.img}></img>
        </td>
        <td key={props.key} value={props.price} className="price">
          {props.price}
        </td>
      </tr>
    </>
  );
};

export default Td;
