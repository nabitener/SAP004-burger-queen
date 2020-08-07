import React from 'react';
import Header from '../../Components/Header/Header';
import './style.css';
import '../../reset.css';
import Button from '../../Components/Buttons/index.js';
import CardCozinha from '../../Components/CardCozinha/CardCozinha';

const Kitchen = () => {
  
  return (
    <main className="main-kitchen">
      <Header />
      <div className='all-area'>
        <div className='list-orders'>
        </div>
        <div className='opened-order'>
          <CardCozinha/>            
          <div className='sub-header'>
            <Button />
          </div>
          <div className='order'>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Kitchen;
