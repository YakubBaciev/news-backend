const mongoose = require('mongoose');
const newscommentSchema = mongoose.Schema({
  name: String,
  text: String,
  newsID: {
   type: mongoose.SchemaTypes.ObjectId,
   ref: 'News',
  }
});
const Newscomment = mongoose.model('Newscomment', newscommentSchema);
module.exports = Newscomment;