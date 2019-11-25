import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/+Home";
import SignIn from "./containers/SignIn";
import Register from "./containers/Register";
import SignOut from "./components/+Authorization/SignOut";
import GiveThings from "./components/+GiveThings";

const App = () => {
  const browserHistory = createBrowserHistory();

  browserHistory.listen((location, action) => {
    window.scrollTo(0, 0);
  });

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/logowanie" component={SignIn} />
        <Route path="/rejestracja" component={Register} />
        <Route path="/wylogowano" component={SignOut} />
        <Route path="/oddaj-rzeczy" component={GiveThings} />
      </Switch>
    </Router>
  );
};

export default App;
