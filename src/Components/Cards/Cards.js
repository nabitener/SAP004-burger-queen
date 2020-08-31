import React, { useState } from "react";
import "./style.css";
import Button from "../Buttons";
import Input from "../Inputs";

const Card = (props) => {
  const [opcao, setOpcao] = useState("");
  const [adicional, setAdicional] = useState("");
  const [priceExtra, setPriceExtra] = useState('');

  const addExtra = (e) => {
    if(adicional !== ""){
      setAdicional(`${adicional} ${e.currentTarget.value}`);
      setPriceExtra(2);
    }else{
      setAdicional(e.currentTarget.value);
      setPriceExtra(1);
    }
  }

  return (
    <div id={props.idCard} className="classCard">
      <div className="container-item">
        <figure className="container-icons">
          <img
            className="class-icon"
            src={require("../../Image/Menu_Icons/" + props.name + ".png")}
            alt="icon-item"
          ></img>
        </figure>

        <div className="container-item-price-options">
          <div className="container-item-price">
            <span className="class-item">{props.name}</span>
            <span className="price">R$ {props.price}</span>
          </div>
          <div className="add-button-container">
            <Button
              name="Add"
              id={`${props.name} ${opcao} ${adicional}`}
              value={props.price + priceExtra}
              className="add-button"
              onClick={props.handleclick}
            />
          </div>
        </div>
      </div>
      <div className="container-option-extra">
        <div className="container-options-value-button">
          <div className="container-options-value">
            {props.options && (
              <select
                className={["select", props.name].join(" ")}
                onChange={(e) => setOpcao(e.currentTarget.value)}
              >
                <option selected disabled>
                  Opções
                </option>
                {props.options.map((element) => (
                  <option value={element} key={props.name + element}>
                    {element}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        <div className="container-options-value-extra">
          {props.extra &&
            props.extra.map((element) => (
              <label key={props.name + element}>
                {element}
                <Input type="checkbox" name={element} value ={element} onChange={addExtra}></Input>
              </label>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
