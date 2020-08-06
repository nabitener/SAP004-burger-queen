import React from "react";
import './style.css';

const Input = (props) => {
    return <input type={props.type} onChange={props.onChange} value={props.value} id={props.id} className={['input', props.className].join(' ')} name={props.name} placeholder={props.placeholder} checked={props.checked}></input>
}

export default Input;