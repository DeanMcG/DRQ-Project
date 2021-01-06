import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Make } from './components/make';
import { Display } from './components/display';
import { Update } from './components/update';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/display">Read</Nav.Link>
              <Nav.Link href="/make">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br></br>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/make' component={Make} exact />
            <Route path='/display' component={Display} exact />
            <Route path='/update/:id' component={Update} exact />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
