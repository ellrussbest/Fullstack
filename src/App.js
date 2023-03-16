import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Users from "./users/pages/Users";

/**
 * Router will have all the paths as its children
 * Route will have a specific path and the component to be rendered on that path
 * Redirect will take you to a new page if there is no such path in your app
 * Switch tells the path to stop checking if it has already gotten the exact/matching path from your values
 * Exact keyword makes sure that the path is the exact path not even its substring can visit the path
 */


function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
