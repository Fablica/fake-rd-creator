import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import TopPage from "./components/TopPage/TopPage";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">TopPage</Link></li>
        <li><Link to="/home">HomePage</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/home" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)
export default App
