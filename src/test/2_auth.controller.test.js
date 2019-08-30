const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-http'));
// chai.should();

require('dotenv').config();

const app = require('..');
const UserModel = require('../data/models/user.model');
const { mockUser } = require('../data/mock-data');

describe("Authentication Tests", () => {

  describe("POST /auth/signin/ with registered user", () => {

    before(async () => await (new UserModel(mockUser)).save());

    const request = () => chai.request(app).post('/auth/signin/').send(mockUser);

    it("Returns 200", () => {
      return request().then((res) => expect(res).to.have.status(200));
    });

    it("Redirects to home", () => {
      return request().then((res) => expect(res).to.redirect);
    });

    it("Sends rl-cred cookie", () => {
      return request().redirects(0).then((res) => {
        expect(res).to.have.cookie('rl-cred');
      });
    });

  });

  // describe("POST /auth/signin/ with unregistered user", () => {

  // });

  // describe("GET /auth/signout/ with authenticated user", () => {

  // });

});
