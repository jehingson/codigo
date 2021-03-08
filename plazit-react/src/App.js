import React, {useContext, Suspense} from "react";
import { Redirect, Router } from "@reach/router";
import { Logo } from "./componets/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./componets/Navbar";
import { Context } from "./context/Context";
//import { Favoritos } from "./pages/Favoritos";
import { Usuario } from "./pages/Usuario";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { NotFound } from "./pages/NotFound";


const Favoritos = React.lazy(() => import('./pages/Favoritos'))

export const App = () => {

  const {isAuth} = useContext(Context)

  return (
    <Suspense fallback={<div>Loadings...</div>}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path="/zoe/:id" />
        <Detail path="/detail/:detailId" />
        { !isAuth && <NotRegisterUser path="/ingresar" />}
        { !isAuth && <Redirect from='/favoritos' to='/ingresar' />}
        { !isAuth && <Redirect from='/usuario' to='/ingresar' />}
        { isAuth && <Redirect from='/ingresar' to='/' />}
        <Favoritos path="/favoritos" />
        <Usuario path="/usuario" />
      </Router>
      <NavBar />
    </Suspense>
  );
};
