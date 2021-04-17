import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllTeams from './Components/AllTeams/AllTeams';
import NotFound from './Components/NotFound/NotFound';
import TeamDetails from './Components/TeamDetails/TeamDetails';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AllTeams></AllTeams>
        </Route>
        <Route path="/team/:teamId">
          <TeamDetails></TeamDetails>
        </Route>
        <Route path ='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
