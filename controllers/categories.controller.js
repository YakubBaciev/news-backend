const Categorie = require ('../models/Categorie.model')

module.exports.categoriesController = {
  postCategories: async (req,res) => {
    try {
      const categorie = await Categorie.create({
        name: req.body.name,
      });
      res.json(categorie);
    }catch(e){
      console.log(e.message)
    }

  },
  deleteCategories: async (req,res) => {
    try {
      const categorie = await Categorie.findByIdAndRemove(req.params.id);
      res.json(categorie);
    } catch(e){
      console.log(e.message)
    }

  },
  getCategories: async (req,res) => {
    try {
      const categorie = await Categorie.find();
      res.json(categorie)
    }catch(e){
      console.log(e.message)
    }
  }
}