const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
   async index(req, res) {
      try {
         const { page = 1 } = req.query;
         
         const products = await Product.paginate({ }, { page, limit: 10 });
         return res.status(200).json(products);
      }
      catch (err) {
         return res.status(400).json(err);
      }
   },

   async show(req, res) {
      try {
         const product = await Product.findById(req.params.id);
         return res.status(200).json(product);
      }
      catch (err) {
         return res.status(404).json(err);
      }
   },

   async store(req, res) {
      try {
         const product = await Product.create(req.body);
         return res.status(201).json(product);
      } catch (err) {
         return res.status(400).json(err);
      }
   },

   async update(req, res) {
      try {
         const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
         return res.status(200).json(product);
      } catch (err) {
         return res.status(400).json(err);
      }
   },

   async destroy(req, res) {
      try {
         await Product.findByIdAndDelete(req.params.id);
         return res.status(204).send();
      }
      catch (err) {
         return res.status(400).json(err);
      }
   }
}