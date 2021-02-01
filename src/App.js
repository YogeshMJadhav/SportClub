import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Cricket from './components/cricketTeam';
import FootBallTeam from './components/footbTeam';
import TennisTeam from './components/tennisTeam';
import SwimmingTeam from './components/swimmingTeam';
import { Navbar, Form, FormControl, Button, Nav, Link} from 'react-bootstrap';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand >Team Records</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/cricket">Cricket</Nav.Link>
            <Nav.Link href="/tennis">Tennis</Nav.Link>
            <Nav.Link href="/football">FootBall</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
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