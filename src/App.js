import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Main from "./components/pages/Main";


const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Main} />
      <Route exact path="/Main" component={Main} />
    </div>
  </Router>
);

export default App;
