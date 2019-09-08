import React from 'react';

function HomePage({ user }) {
  return (
    <div className="container-fluid">
      {!user &&
        <center className="container mt-5">
          <h1>What are you reading?</h1>
          <h4 className="text-muted">Reading list allows you to keep track of books you've read, and intend to read, while also sharing that information with your friends!</h4>
          <div className="mt-5 d-flex justify-content-center">
            <a href="/signin/" className="btn btn-primary mr-1">Sign In</a>
            <a href="/signup/" className="btn btn-secondary ml-1">Sign Up</a>
          </div>
        </center>
      }
      {user &&
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{user.name}'s Reading List:</h3>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {user.books.map(book => (
                <li className="list-group-item">{book}</li>
              ))}
            </ul>
          </div>
          <form className="card-footer form-inline" enctype="application/json" action="/books/" method="POST">
            <input className="form-control" type="text" name="book[author]" placeholder="Book Author" required />
            <input className="form-control" type="text" name="book[title]" placeholder="Book Title" required />
            <button className="btn btn-success">Add Book</button>
          </form>
        </div>

      }


    </div>
  );
}

export default HomePage;