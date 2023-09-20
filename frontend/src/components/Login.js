import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return isAuthenticated ? (
    <button className="ButtonLogin" onClick={() => logout({ returnTo: "http://localhost:3000/" })}>
      Cerrar Sesión
    </button>
  ) : (
    <button onClick={loginWithRedirect} className="ButtonLogin">
        Iniciar Sesión
    </button>
  );
};

export default AuthenticationButton;
