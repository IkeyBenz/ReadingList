const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-http'));

require('dotenv').config();

const app = require('..');
const User = require('../data/models/user.model');
const { mockUser } = require('../data/mock-data');

describe("User Controller Tests", () => {


  describe("POST /users/ with valid body", () => {

    beforeEach(async () => await User.deleteMany({}));

    const request = () => chai.request(app).post('/users/').send(mockUser);

    it("Creates new user in db", async () => {
      const originalUserCount = await User.countDocuments();
      return request().then(async (res) => {
        const newUserCount = await User.countDocuments();
        expect(originalUserCount + 1).to.equal(newUserCount);
      });
    });

    it("Hashes the password", () => {
      return request().then(async (res) => {
        const { password } = await User.findOne({}, '', { sort: { 'created_at': -1 } });
        expect(mockUser.password).to.not.equal(password);
      });
    });

  });


});



