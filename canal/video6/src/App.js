import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/productos">
          <Layout/>
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

export default App;
