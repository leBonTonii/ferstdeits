var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
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

module.exports = mongoose.model('User', UserSchema);