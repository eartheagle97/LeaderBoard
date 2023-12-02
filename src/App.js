import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import LeaderBoard from "./Component/LeaderBoard";
import "h8k-components";

const title = "SPA - LeaderBoard";

function App() {
  return (
    <Router>
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <Switch>
          <Route exact path="/" render={() => <LeaderBoard />} />
          <Route path="/rank" render={() => <LeaderBoard sortBy="rank" />} />
          <Route path="/points" render={() => <LeaderBoard sortBy="points" />} />
          <Route path="/name" render={() => <LeaderBoard sortBy="name" />} />
          <Route path="/age" render={() => <LeaderBoard sortBy="age" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
