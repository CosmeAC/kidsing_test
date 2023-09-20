import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Navbar.css';
import {Link} from 'react-scroll';
import {CgProfile} from 'react-icons/cg';

const Navbar = () => {

const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className='Navbar'>
      <Link to='Home'> Home </Link>
      <Link to='About'> About us </Link>
      <Link to='Team'> Team </Link>
      <button onClick={loginWithRedirect}>
      <CgProfile/>
    </button>
    </nav>
  )
}

export default Navbar;
