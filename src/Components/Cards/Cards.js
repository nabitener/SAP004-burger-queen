import React from 'react';
import './style.css';
import Button from '../Buttons';
//import Input from '../Inputs';

const Card = (props) => {

/*  const [subItem, setSubItem] = useState('');

  useEffect(() => {
    console.log(props.option)
    subElementos(props.option);
  }, [props.option]);

  useEffect(() => {}, [subItem]);

  const subElementos = (option) => {
    if (option !== '') {
      option.map((element) => {
       return( setSubItem((
          <Input
            type="radio"
            name={props.item_name}
            value={element}
            onChange={props.handlechange}
          />
        )))
      });
    }else{
      return setSubItem('')
    }
  };*/

  
  return (
    <div id={props.idCard} className="classCard">
      <div className="container-item">
        <figure className="container-icons">
          <img
            className="class-icon"
            src={require('../../Image/Menu_Icons/' + props.name + '.png')}
            alt="icon-item"
          ></img>
          {/* <img className='class-icon' src={require('../../Image/Menu_Icons/' + props.item_name + '.png')} alt="icon-item"></img> */}
        </figure>

        <div className="container-item-price-options">
          <div className="container-item-price">
            <span className="class-item">{props.name}</span>
            <span className="price">R$ {props.price}</span>
          </div>

          <div className="container-options-value-button">
            <div className="container-options-value">
            </div>

            <div className="add-button">
              <Button
                name="+"
                id={props.name}
                value={props.price}
                onClick={props.handleclick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
