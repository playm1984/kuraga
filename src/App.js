import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header'
import Photo from './router-pages/item'
import Posts from './router-pages/posts'
import Login from './router-pages/login'
import Profile from './router-pages/profile'

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Header/>

        <Container fluid>
          <Switch>
            <Route path='/' component={Photo} exact/>
            <Route path='/login' component={Login} exact/>
            <Route path='/posts' component={Posts} exact/>
            <Route path='/profile' component={Profile} exact/>
          </Switch>
        </Container>

      </Container>
      
    );
  }
}

export default App;