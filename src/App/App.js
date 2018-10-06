import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageHeader from "./components/PageHeader/PageHeader";
import TopPage from "./components/TopPage/TopPage";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const App = () => (
  <Router>
    <div>
      <PageHeader />
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/home" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
export default App;
