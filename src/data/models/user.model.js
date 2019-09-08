const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  books: [{ title: String, author: String }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'user' }]
}, { timestamps: true });

UserSchema.pre('save', function hashPassword(next) {
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (error, hash) => {
      this.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, same) => {
      if (err) reject(err);
      else resolve(same);
    });
  });
}

UserSchema.methods.generateCredential = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '60 days' });
}

UserSchema.statics.findByJWT = function (token) {
  const _id = jwt.decode(token, process.env.JWT_SECRET)._id;
  return this.findOne({ _id });
}

module.exports = model('user', UserSchema);