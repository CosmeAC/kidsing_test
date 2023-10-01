import React from 'react';
import '../../styles/Home.css';
import verdetrans from '../../assets/Mainimagenes/verdetrans.png';
import erizo from '../../assets/capturas/Juegomano.jpg';
import girafa from '../../assets/capturas/Juegomemory.jpg';
import oso from '../../assets/capturas/Jugadoresdos.jpg';
import osopolar from '../../assets/capturas/Jugadores.jpg';
import racoon from '../../assets/capturas/SeccionLetras.jpg';

const Home = () => {
  return (
    <div className='home text-2xl' id='Home'>
      <div className='home-items'> 
        <img src={verdetrans} alt='' id='verdetrans'/>      
      </div>
      {/* <div class="carousel rounded-box h-2/5 -ml-5 ">
        <div class="carousel-item -ml-9">
          <img src={erizo} alt="Burger" />
        </div>
        <div class="carousel-item">
          <img src={girafa} alt="Burger" />
        </div>
        <div class="carousel-item">
          <img src={oso} alt="Burger" />
        </div>
        <div class="carousel-item">
          <img src={osopolar} alt="Burger" />
        </div>
        <div class="carousel-item">
          <img src={racoon} alt="Burger" />
        </div>
      </div> */}

    </div>
  );
}

export default Home;