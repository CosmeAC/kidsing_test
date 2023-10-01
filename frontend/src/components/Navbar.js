import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import uk from '../assets/uk.png';
import spain from '../assets/spain.png';
import { CgProfile } from 'react-icons/cg';
import Login from '../components/Login'

import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  }


  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [t, i18n] = useTranslation("main"); //traduccion

  return (
    <nav className='Navbar'>
      <div className='languagebtn-container'>
        <button className='uknav' onClick={() => {handleChangeLng("en")}}> <img src={uk} alt='' id='uknav' /> </button>
        <button className='spainnav' onClick={() => {handleChangeLng("es")}}> <img src={spain} alt='' id='spainnav' /> </button>
      </div>

      {/* <Link className='logo'> <img src={verdetrans} alt='' id='verdetrans'/> </Link> */}
      <Link to='Home'> {t("Navbar.Home")} </Link>
      <Link to='About'> About us </Link>
      <Link to='Team'> Team </Link>
      <Login/>
      {/* <button onClick={loginWithRedirect} id='profilebtn'>
        <CgProfile />
      </button> */}
    </nav>
  )
}

export default Navbar;
