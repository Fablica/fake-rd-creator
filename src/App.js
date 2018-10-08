import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { history } from "./helpers";
import PageHeader from "./components/PageHeader/PageHeader";
import TopPage from "./components/TopPage/TopPage";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <PageHeader />
          <Switch>
            <Route exact path="/fake-rd-creator" component={TopPage} />
            <Route path="/home" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
