const News = require ('../models/News.model');

module.exports.newsController = {
  postNews: async(req,res) => {
    try{
    const news = await News.create({
      title: req.body.title,
      text: req.body.text,
      categorieID: req.body.categorieID,
    });
    res.json(news);
    } catch(e) {
      console.log(e.message);

    }

  },
  deleteNews: async (req,res) => {
    try{
      const news = await News.findByIdAndRemove(req.params.id);
      res.json(news);
    } catch(e) {
      console.log(e.message)
    }

  },
  patchNews: async (req,res) => {
    try {
      const news = await News.findByIdAndUpdate(req.params.id ,{
        title: req.body.title,
        text: req.body.text,
        categorieID: req.body.categorieID,
      });
      res.json(news);
    } catch(e) {
      console.log(e.message)
    }

  },
  getNewsID: async (req,res) => {
    try {
      const news = await News.findById(req.params.id);
      res.json(news);
    }catch(e) {
      console.log(e.message)
    }

  },
  getNews: async (req,res) => {
    try {
      const news = await News.find();
      res.json(news);
    }catch(e) {
      console.log(e.message);
    }

  },
  getNewsByCategories: async(req,res) => {
    try {
      const news = await News.find({categorieID: req.params.id});
      res.json(news);
    } catch(e) {
      console.log(e.message)
    }

  }
}