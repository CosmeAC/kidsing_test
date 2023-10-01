import React from 'react';
import '../../styles/Team.css';
import foto from '../../assets/foto.jpg';
import alex from '../../assets/Alex_Cosme.jpg';
import saira from '../../assets/IMG_8058_Facetune_19-01-2019-19-13-59.jpg';

const Team = () => {
  return (
    <div className='team-container' id='Team'>
      <div class="row">
        <h1>OUR TEAM</h1>
      </div>
      <div class="row">
        {/* //*-- Column 1-// */}
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={foto} alt='eric' id='eric'/>
            </div>
            <h3> Eric</h3>
            <p> Data Analyst</p>
          </div>
        </div>
        {/* <!-- Column 2--> */}
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={alex} alt='' id='alex'/>
            </div>
            <h3>Alex</h3>
            <p>Backend Developer</p>
          </div>
        </div>
        {/* <!-- Column 3--> */}
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={saira} alt='' id='saira'/>
            </div>
            <h3>Saira</h3>
            <p> Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;