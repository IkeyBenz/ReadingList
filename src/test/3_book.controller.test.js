const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-http'));
chai.should();

require('dotenv').config();

// const app = require('..');

describe("Book controller tests", () => {
  describe("POST /books/ with authenticated user:", () => {

    it("Adds a book to the authenticated user in the db", (done) => {
      // Write assertions...
      done();
    });

  });

  describe("POST /books/ with unauthenticated user:", () => {

    it("Responds with unauthorized", (done) => {
      // Write assertions...
      done();
    })

    // Redirects to signin page
    it("Redirects to signin page", (done) => {
      // Write assertions...
      done();
    });

  });
});