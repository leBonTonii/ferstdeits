var crypto 		 = require('crypto');
var jwt 		 = require('jsonwebtoken');
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var UserSchema = new Schema({
   email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  categories: [{type: Schema.ObjectId, ref: "Category"}]
  hash: String,
  salt: String
});

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE! POSAR MY SECRET A VARIABLE DENTORN DEL SERVIDOR
};

module.exports = mongoose.model('User', UserSchema);