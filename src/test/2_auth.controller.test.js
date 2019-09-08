const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-http'));
chai.should();

require('dotenv').config();

const app = require('..');
const UserModel = require('../data/models/user.model');
const { mockUser } = require('../data/mock-data');

describe("Authentication Tests", () => {

  before(async () => await (new UserModel(mockUser)).save());
  after(async () => await UserModel.deleteMany({}));

  describe("POST /auth/signin/ with registered user", () => {

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

  describe("POST /auth/signin/ with invalid credentials", () => {
    const invalidUser = { email: 'wrong.email@address.com', password: 'incorrect' }
    const request = () => chai.request(app).post('/auth/signin/').send(invalidUser);

    it('Returns 200', () => {
      return request().then((res) => expect(res).to.have.status(200));
    });

    it("Does not send rl-cred before redirecting", () => {
      return request().redirects(0).then((res) => {
        expect(res).to.not.have.cookie('rl-cred')
      });
    });

    it('Has error in query', () => {
      return request().then((res) => expect(res).to.redirectTo(/^.*\?error=.*$/));
    });

  });

  // describe("GET /auth/signout/ with authenticated user", () => {

  // });

});
