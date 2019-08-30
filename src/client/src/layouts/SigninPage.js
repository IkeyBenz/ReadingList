import React, { Component } from 'react';

class SigninPage extends Component {
  render() {
    return (
      <form className="card container" method="POST" action="/auth/signin/">
        <div className="card-header">
          <h3 className="card-title">Reading List Sign In</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label for="email">Email:</label>
            <input className="form-control" type="email" name="email" placeholder="example@email.com" required />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input className="form-control" type="password" name="password" placeholder="********" required />
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">Sign In</button>
        </div>
      </form>
    );
  }
}

export default SigninPage;