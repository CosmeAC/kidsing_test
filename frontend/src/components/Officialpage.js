import React from 'react'
import '../styles/Officialpage.css';
import monolengua from '../assets/monolengua.png';
import star from '../assets/star.png';
import party from '../assets/party.png';
import aslhand from '../assets/aslhand.png';
import dragon from '../assets/dragon.png';
import puzzle from '../assets/puzzle.png';
import {Link} from 'react-scroll';
// import {FcRating} from 'react-icons/fc';
// import abc from '../assets/abc.png'

const Officialpage = () => {
  return (
    <div className='Main-container'>
      <div className='Sidebar'>
        {/* <img src={monolengua} alt='' id='monolengua' /> */}
        {/* <ul className="menu bg-base-200 w-70 rounded-box">
          <li> <Link> Página principal </Link></li>
          <li><Link> Aprende </Link></li>
          <li><Link> Juegos</Link></li>
          <li><Link> Perfil </Link> </li>
        </ul> */}
        <ul className="menu bg-base-100 h-500 w-70 rounded-box">
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <Link>
            <img width="28" height="28" src="https://img.icons8.com/fluency/28/home.png" alt="home"/>
          HOME
            </Link>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <Link>
            <img width="28" height="28" src="https://img.icons8.com/color/28/teaching.png" alt="teaching"/>
            LEARN
            </Link>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <Link>
            <img width="28" height="28" src="https://img.icons8.com/color/48/launch-box.png" alt="launch-box"/>
            GAMES
            </Link>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <Link>
            <img width="30" height="30" src="https://img.icons8.com/external-flaticons-flat-flat-icons/30/external-child-hospitality-services-flaticons-flat-flat-icons-2.png" alt="external-child-hospitality-services-flaticons-flat-flat-icons-2"/>
              PROFILE
            </Link>
          </li>
            <details open>
              <summary>             <img width="28" height="28" src="https://img.icons8.com/color/28/teaching.png" alt="teaching"/> </summary>
              <ul>
                <li><Link>Vowels</Link></li>
                <li><Link>Alphabet </Link></li>
              </ul>
            </details>
        </ul>
      </div>
      <div className='Main-Sections-Container'>
        <div className='section-vocals'> Lección 1: LAS VOCALES </div>
        <div className='vocals-path'>

          <ul className='btnlist'>
            <li> <Link to='vocales'> <button className='btn' type='image'> <img src={star} alt='' id='star' /> </button> </Link></li>
            <li> <Link to='Vvocales'> <button className='btn'><img src={dragon} alt='' id='dragon'/></button> </Link></li>
            <li> <button className='btn2'> <img src={aslhand} alt='' id='aslhand'/> </button></li>
            <li> <button className='btn3'><img src={puzzle} alt='' id='puzzle'/> </button></li>
            <li> <button className='btn4'><img src={party} alt='' id='party'/> </button></li>
          </ul>
        </div>
        <div className='section-letters'> Lección 2: EL ABECEDARIO </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> <Link to='alphabetAE'> <button className='btnA'> <img src={star} alt='' id='star' /> </button></Link></li>
            <li> <Link to='alphabetFJ'> <button className='btnA1'> </button> </Link></li>
            <li> <Link to='alphabetKO'> <button className='btnA2'> </button> </Link></li>
            <li> <Link to='alphabetPT'> <button className='btnA3'> </button> </Link></li>
            <li> <Link to='vocales'> <button className='btnA4'> </button> </Link></li>
          </ul>
        </div>
        <div className='section-number'> Lección 3: LOS NÚMEROS</div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> <a href='/'> <button className='btn01'> <img src={star} alt='' id='star' /> </button> </a></li>
            <li> <button className='btn11'> </button></li>
            <li> <button className='btn22'> </button></li>
            <li> <button className='btn33'> </button></li>
            <li> <button className='btn44'> <img src={party} alt='' id='party'/>  </button></li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Officialpage;

// Mirar este link
// https://blog.avada.io/css/3d-buttons