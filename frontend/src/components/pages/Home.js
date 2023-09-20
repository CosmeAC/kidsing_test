import React from 'react';
import '../../styles/App.css';
import monosonriente from '../../assets/monosonriente.png';

export const Home = () => {
  return (
    <div className='home' id='Home'>
      <div className='home-items'>
        <img src={monosonriente} alt='' id='monosonriente'/>
      </div> <br/>
      <div className='home-items'>
        <h2> Let's have FUN and LEARN together</h2>
      </div>

    </div>
  );
}

export default Home;