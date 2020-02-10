import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/signout" component={SignOut} />
          <Route path="/give-things" component={GiveThings} />
          <Route path="/collections" component={Collections} />
        </Switch>
      </ScrollIntoView>
    </Router>
  );
};

export default App;
