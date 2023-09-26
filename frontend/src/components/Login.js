import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {CgProfile} from 'react-icons/cg';

const AuthenticationButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return isAuthenticated ? (
    <button className="ButtonLogin" onClick={() => logout({ returnTo: "http://localhost:3000/" })}>
      <CgProfile/>Cerrar Sesión
    </button>
  ) : (
    <button onClick={loginWithRedirect} className="ButtonLogin">
        <CgProfile/>Iniciar Sesión
    </button>
  );
};

export default AuthenticationButton;
