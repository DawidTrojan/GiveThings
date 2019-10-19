import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/+Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Logout from "./components/+Logout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/logowanie" component={Login} />
        <Route path="/rejestracja" component={Register} />
        <Route path="/wylogowano" component={Logout} />
      </Switch>
    </Router>
  );
};

export default App;
