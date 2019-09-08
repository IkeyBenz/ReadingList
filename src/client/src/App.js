import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import cookie from 'react-cookies';
import { Header } from './components/';
import { HomePage, SignupPage, SigninPage, FriendsPage } from './layouts/';

function App() {
  const [state, setState] = useState({
    user: false
  });

  if (cookie.load('rl-cred') && !state.user) {
    fetch('/auth/current-user/').then(res => res.json()).then(({ user }) => {
      localStorage.setItem('rl-user', JSON.stringify(user));
      setState({ user });
    });
  }

  return (
    <div>
      <Header user={state.user} />
      <BrowserRouter>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/signup/" render={() => <SignupPage />} />
        <Route exact path="/signin/" render={() => <SigninPage />} />
        <Route exact path="/friends/" render={() => <FriendsPage />} />
      </BrowserRouter>
    </div>
  );
}

export default App;