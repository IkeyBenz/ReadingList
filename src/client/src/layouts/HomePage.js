import React, { Component } from 'react';

class HomePage extends Component {

  render() {
    return (
      <div className="container-fluid">
        <center className="container mt-5">
          <h1>What are you reading?</h1>
          <h4 className="text-muted">Reading list allows you to keep track of books you've read, and intend to read, while also sharing that information with your friends!</h4>
          <div className="mt-5 d-flex justify-content-center">
            <a href="/signin/" className="btn btn-primary mr-1">Sign In</a>
            <a href="/signup/" className="btn btn-secondary ml-1">Sign Up</a>
          </div>
        </center>

      </div>
    );
  }
}

export default HomePage;