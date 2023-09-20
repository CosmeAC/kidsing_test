import React from 'react';
import '../../styles/App.css';
import foto from '../../assets/foto.jpg';

export const Team = () => {
  return (
    <div className='team-container' id='Team'>
      <div class="row">
        <h1>Our Team</h1>
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
              <img src="profile-img-2.png" alt=''/>
            </div>
            <h3>Alex</h3>
            <p>Back end Developer</p>
          </div>
        </div>
        {/* <!-- Column 3--> */}
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="profile-img-3.png" alt='' />
            </div>
            <h3>Saira</h3>
            <p> Front End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;