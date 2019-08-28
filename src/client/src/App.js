import React, { Component } from 'react';
import { Header } from './components/';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage, SignupPage, SigninPage, FriendsPage } from './layouts/';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/signup/" render={() => <SignupPage />} />
          <Route exact path="/signin/" render={() => <SigninPage />} />
          <Route exact path="/friends/" render={() => <FriendsPage />} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;