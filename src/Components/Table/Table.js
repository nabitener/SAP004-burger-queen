import React from 'react';
import './style.css';
import Menos from '../../Image/menos.png';
import Mais from '../../Image/mais.png';

const Td = (props) => {
  return (
    <>
      <tr className="linha">
        <td className="celula-tabela">
          {props.item}
        </td>
        <td className="celula-tabela quantidade">
            <img src={Menos} className="img-menos btn-quant" alt="img-menos" onClick={props.handleClickMenos}></img>
          { props.quantidade }
            <img src={Mais} className="img-mais btn-quant" alt="img-mais" onClick={props.handleClickMais}></img>
        </td>
        <td className="price celula-tabela"> 
        {`R$ ${ props.price}`}
        </td>
        <td className="celula-tabela" onClick={props.handleClickDelete}>
          <span role='img' aria-label="deletar" className="deletar">❌</span>
        </td>
      </tr>
    </>
  );
};

export default Td;
