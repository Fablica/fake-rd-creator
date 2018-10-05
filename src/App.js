import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopPage from "./components/TopPage/TopPage";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/home" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)
export default App
