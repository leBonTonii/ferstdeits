var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    categories: [{type: Schema.ObjectId, ref: "Category"}]
});

module.exports = mongoose.model('User', UserSchema);