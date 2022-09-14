const mongoose = require ('mongoose');
const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  categorieID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Categorie"
  }
});
const News = mongoose.model('News', newsSchema);
module.exports = News;