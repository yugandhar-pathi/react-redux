import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {DisplayItem, RegisterItem} from './pages'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/display-item">
            <DisplayItem />
          </Route>
          <Route path="/">
            <RegisterItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}