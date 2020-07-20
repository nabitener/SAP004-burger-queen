import React from 'react';
import './App.css';
import Button from "./Components/Buttons/index.js";
import Input from "./Components/Inputs/index.js";

function App() {
  const alerta = () => {
    alert("OK");
  }  
  return (
    <div className="App">
      <Button handleClick={alerta} id="bt1" class="styleBt" name="Botão 1"/>
      <Button name="Botão 1" title="Verde"/>
      <Input type="text" id="text-name" name="Nome"/>
      <p>Agora vai...</p>
    </div>
  );
}
export default App;
