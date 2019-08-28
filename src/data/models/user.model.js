const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

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

UserSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, done);
}

module.exports = model('User', UserSchema);