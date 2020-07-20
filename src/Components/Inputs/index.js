import React from "react";

const Input = (props) => {
    return <input type={props.type} id={props.id} placeholder={props.name} required></input>
}

export default Input;