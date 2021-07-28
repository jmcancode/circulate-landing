import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import LandingPage from "./pages/landing";
import ErrorPage from "./pages/fourohfour";
// components
import FooterNav from "./components/nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
      <FooterNav />
    </Router>
  );
}

export default App;
