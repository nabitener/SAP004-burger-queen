import React from "react";
import "./style.css";

const Button = (props) => {
  return <button onClick={props.onClick} value={props.value} id={props.id} className={['btn', props.className].join(' ')}>{props.name} {props.title}</button>
}
export default Button;