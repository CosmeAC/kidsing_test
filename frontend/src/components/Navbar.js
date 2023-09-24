import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Navbar.css';
import {Link} from 'react-scroll';
import {CgProfile} from 'react-icons/cg';

import { useTranslation } from 'react-i18next';

const Navbar = () => {

const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

const [t, i18n] = useTranslation("main"); //traduccion

  return (
    <nav className='Navbar'>
      <Link to='Home'> {t("Navbar.Home")}
      </Link>
      <Link to='About'> About us </Link>
      <Link to='Team'> Team </Link>
      <button onClick={loginWithRedirect}>
      <CgProfile/>
      </button>
    </nav>
  )
}

export default Navbar;
