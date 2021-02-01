import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import Cricket from './components/cricketTeam';
import FootBallTeam from './components/footbTeam';
import TennisTeam from './components/tennisTeam';
import SwimmingTeam from './components/swimmingTeam';
export default function App() {
  return (
    <div>
      <Router>
        <ul>
          <li><NavLink  to='/cricket'>Cricket Team</NavLink></li>
          <li><NavLink  to='/tennis'>Tennis Team</NavLink></li>
          <li><NavLink  to='/football'>FootBall Team</NavLink></li>
          <li><NavLink  to='/swimming'>Swimming Team</NavLink></li>
        </ul>
        <Switch>
          <Route path = "/cricket" component = {Cricket} />
          <Route path = "/tennis" component = {TennisTeam} />
          <Route path = "/football" component = {FootBallTeam} />
          <Route path = "/swimming" component = {SwimmingTeam} />
        </Switch>
      </Router>
    </div>
  );
}