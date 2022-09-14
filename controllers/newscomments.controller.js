const Newscomment = require('../models/Newscomment.model')


module.exports.commentsController = {
  postCommentsID: async (req,res) => {
    try{
      const newscomment = await Newscomment.create( req.params.id,{
        name: req.body.name,
        text: req.body.text,
        newsID: req.body.newsID,
      });
      res.json(newscomment);
    } catch(e){
      console.log(e.message);
    }


  },
  deleteComments: async (req,res) => {
    try {
      const newscomment = await Newscomment.findByIdAndRemove(req.params.id);
     res.json(newscomment);
    } catch(e){
      console.log(e.message)
    } 


  },
  getCommentsByNews: async (req,res) => {
    try {
      const newscomment = await Newscomment.find({newsID: req.params.id});
      res.json(newscomment);
    }catch(e){
      console.log(e.message)
    }
    
  }

}