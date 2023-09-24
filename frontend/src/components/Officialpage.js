import React from 'react'
import '../styles/Officialpage.css';
import monolengua from '../assets/monolengua.png';
import star from '../assets/star.png';
import party from '../assets/party.png';
import aslhand from '../assets/aslhand.png';
import Aicon from '../assets/iconosOfficial/Aicon.png';
import abcicon from '../assets/iconosOfficial/abcicon.png';
import numerosicon from '../assets/iconosOfficial/numerosicon.png';
import heart from '../assets/iconosOfficial//heart.png';
// import puzzle from '../assets/puzzle.png';
// import games from '../assets/games.png';
import Memory from '../assets/iconosOfficial/Memory.png';
// import cuboABC from '../assets/cuboABC.png';
// import dados from '../assets/dados.png';
// import {Link} from 'react-scroll';

import { Link } from 'react-router-dom';
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
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box' >
            <Link to='/'>
            <img width="28" height="28" src="https://img.icons8.com/fluency/28/home.png" alt="home"/>
          HOME
            </Link>
          </li>
          {/* <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <Link>
            <img width="28" height="28" src="https://img.icons8.com/color/28/teaching.png" alt="teaching"/>
            LEARN
            </Link>
          </li> */}
          {/* <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <Link>
            <img width="28" height="28" src={games} alt="launch-box"/>
            GAMES
            </Link>
          </li> */}
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <Link to='/Jugadores'>
              <img width="30" height="30" src="https://img.icons8.com/external-flaticons-flat-flat-icons/30/external-child-hospitality-services-flaticons-flat-flat-icons-2.png" alt="external-child-hospitality-services-flaticons-flat-flat-icons-2" />
              PROFILE
            </Link>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box' href='#abecedario-ae'>
            <a href='#abecedario-ae'>
              <img src={abcicon} alt='' id='abcicon' />
              ABECEDARIO A-E
            </a>
          </li>

          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#abecedario-fj'>
              <img src={abcicon} alt='' id='abcicon' />
              ABECEDARIO F-J
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#abecedario-ko'>
              <img src={abcicon} alt='' id='abcicon' />
              ABECEDARIO K-O
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#abecedario-pt'>
              <img src={abcicon} alt='' id='abcicon' />
              ABECEDARIO P-T
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#abecedario-uz'>
              <img src={abcicon} alt='' id='abcicon' />
              ABECEDARIO U-Z
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#losnumeros'>
              <img src={abcicon} alt='' id='abcicon' />
              LOS NUMEROS
            </a>
          </li>
          
          

            {/* <details open>
              <summary>             <img width="28" height="28" src="https://img.icons8.com/color/28/teaching.png" alt="teaching"/> </summary>
              <ul>
                <li><Link>Vowels</Link></li>
                <li><Link>Alphabet </Link></li>
              </ul>
            </details> */}
        </ul>
      </div>
      <div className='Main-Sections-Container'>
        <div className='section-vocals'> <strong>Lección 1: LAS VOCALES </strong> </div>
        <div className='vocals-path'>

          <ul className='btnlist'>
            <li>
              <Link to='/'>
                <button className='btn1' type='image'> <img src={star} alt='' id='star' /></button>
              </Link>
            </li>

            <li> 
              <Link to='/'> 
              <button className='btn2'><img src={Aicon} alt='' id='Aicon' /></button> 
              </Link>
            </li>

            <li>
              <Link to='Vvocales'>  
              <button className='btn3'> <img src={aslhand} alt='' id='aslhand' /></button>
              </Link>
            </li>

            <li>
              <Link to='/'> 
              <button className='btn4'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox' /> </button>
              </Link>
            </li>

            <li>
              <Link to='/'> 
              <button className='btn5'> <img src={Memory} alt='' id='Memory' /> </button>
              </Link>
            </li>

            <li> 
              <Link to='/'>
              <button className='btn6'><img src={heart} alt='' id='heart' /> </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className='section-letters' id='abecedario-ae'><strong>Lección 2: EL ABECEDARIO A-E</strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li>
              <Link to='/'>
                <button className='btnA'> <img src={star} alt='' id='star' /> </button>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' /> </button>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <button className='btnA2'><img src={aslhand} alt='' id='aslhand' /> </button>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox' /></button> </Link></li>
            <li>
              <Link to='vocales'>
                <button className='/'><img src={Memory} alt='' id='Memory' /></button>
              </Link>
            </li>
            <li>
              <Link to='vocales'>
                <button className='/'><img src={heart} alt='' id='heart' /></button>
              </Link>
            </li>
          </ul>
        </div>

        <div className='section-letters' id='abecedario-fj'><strong>Lección 2: EL ABECEDARIO F-J  </strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
              <Link to='alphabetAE'> <button className='btnA'> <img src={star} alt='' id='star' /> </button></Link></li>
            <li> 
              <Link to='alphabetFJ'> <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' />  </button> </Link></li>
            <li> 
              <Link to='alphabetKO'> <button className='btnA2'><img src={aslhand} alt='' id='aslhand'/> </button> </Link></li>
            <li> 
              <Link to='alphabetPT'> <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> </Link></li>
            <li> 
              <Link to='vocales'> <button className='btnA4'><img src={Memory} alt='' id='Memory'/></button> </Link></li>
            <li> 
              <Link to='vocales'> <button className='btnA5'><img src={heart} alt='' id='heart'/></button> </Link></li>
          </ul>
        </div>
        <div className='section-letters' id='abecedario-ko'><strong>Lección 2: EL ABECEDARIO K-O  </strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
              <Link to='alphabetAE'> <button className='btnA'> <img src={star} alt='' id='star' /> </button></Link></li>
            <li> 
              <Link to='alphabetFJ'> <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' />  </button> </Link></li>
            <li> 
              <Link to='alphabetKO'> <button className='btnA2'><img src={aslhand} alt='' id='aslhand'/> </button> </Link></li>
            <li> 
              <Link to='alphabetPT'> <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> </Link></li>
            <li> 
              <Link to='vocales'> <button className='btnA4'><img src={Memory} alt='' id='Memory'/></button> </Link></li>
            <li> 
              <Link to='vocales'> <button className='btnA5'><img src={heart} alt='' id='heart'/></button> </Link></li>
          </ul>
        </div>
        <div className='section-letters' id='abecedario-pt'><strong>Lección 2: EL ABECEDARIO P-T  </strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
              <Link to='alphabetAE'> <button className='btnA'> <img src={star} alt='' id='star' /> </button></Link></li>
            <li> 
              <Link to='alphabetFJ'> <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' />  </button> </Link></li>
            <li> 
              <Link to='alphabetKO'> <button className='btnA2'><img src={aslhand} alt='' id='aslhand'/> </button> </Link></li>
            <li> 
              <Link to='alphabetPT'> <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> </Link></li>
            <li> 
              <Link to='vocales'> <button className='btnA4'><img src={Memory} alt='' id='Memory'/></button> </Link></li>
            <li> 
              <Link to='vocales'> <button className='btnA5'><img src={heart} alt='' id='heart'/></button> </Link></li>
          </ul>
        </div>
        <div className='section-letters' id='abecedario-uz'><strong>Lección 2: EL ABECEDARIO U-Z  </strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
              <Link to='alphabetAE'> 
              <button className='btnA'> <img src={star} alt='' id='star' /> </button>
              </Link>
              </li>
            <li> 
              <Link to='alphabetFJ'> 
              <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' />  </button> 
              </Link>
              </li>
            <li> 
              <Link to='alphabetKO'> 
              <button className='btnA2'><img src={aslhand} alt='' id='aslhand'/> </button> 
              </Link>
              </li>
            <li> 
              <Link to='alphabetPT'>
                 <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> 
                 </Link>
                 </li>
            <li> 
              <Link to='vocales'> 
              <button className='btnA4'><img src={Memory} alt='' id='Memory'/></button> 
              </Link>
              </li>
            <li> 
              <Link to='vocales'> 
              <button className='btnA5'><img src={heart} alt='' id='heart'/></button> 
              </Link>
              </li>
          </ul>
        </div>
        
        <div className='section-number'id='losnumeros'> <strong>Lección 3: LOS NÚMEROS</strong></div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
              <a href='/'> <button className='btn01'> <img src={star} alt='' id='star' /> </button> </a>
              </li>
            <li> 
              <button className='btn11'> <img src={numerosicon} alt='' id='numerosicon' /> </button>
              </li>
            <li> 
              <button className='btn22'> <img src={aslhand} alt='' id='aslhand'/> </button>
              </li>
            <li> 
              <button className='btn33'> <img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/>  </button></li>
            <li> 
              <button className='btn44'> <img src={Memory} alt='' id='Memory'/> </button>
              </li>
            <li> 
              <button className='btn55'> <img src={heart} alt='' id='heart'/>  </button>
              </li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Officialpage;

// Mirar este link
// https://blog.avada.io/css/3d-buttons