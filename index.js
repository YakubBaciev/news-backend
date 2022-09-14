const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const port = 3000;

app.use(express.json());
app.use(require('./routes/categories.route'));
app.use(require('./routes/news.route'));
app.use(require('./routes/newscomments.route'));

mongoose.connect('mongodb+srv://Yakub:mecheti95@cluster228.kvjyiib.mongodb.net/news', 
(err) => {
  if (err){
    console.log(err);
  }
  console.log('mongodb запущен');
 
  app.listen(port, () => {
  console.log('сервер запущен');
})
}
)

