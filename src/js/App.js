import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import Register from "./containers/Register";
import SignOut from "./components/+Authorization/SignOut";
import GiveThings from "./containers/GiveThings";
import Collections from "./containers/Collections";
import ScrollIntoView from "../assets/ScrollIntoView";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollIntoView>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={SignIn} />
          <Route path="/rejestracja" component={Register} />
          <Route path="/wylogowano" component={SignOut} />
          <Route path="/oddaj-rzeczy" component={GiveThings} />
          <Route path="/zbiórki" component={Collections} />
        </Switch>
      </ScrollIntoView>
    </Router>
  );
};

export default App;
