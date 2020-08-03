import React from 'react';
import Button from '../Buttons';

const Td = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th key={props.key} item={props.item}>
            {props.item}
          </th>
          <th key={props.key} quantidade={props.quantidade}>
            <Button name="-" />
            {props.quantidade}
            <Button name="+" />
          </th>
          <th key={props.key} price={props.price}>
            {props.price}
          </th>
          <Button name="❌" />
        </tr>
        <tr>
          <th>Total</th>
          <th>R$ </th>
        </tr>
      </tbody>
    </table>
  );
};

export default Td;
