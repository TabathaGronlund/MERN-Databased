
const product = require('../models/product.model');


module.exports = {

    //create
    createProduct: (req, res) => {
        product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.status(400).json(err));
    },
    //read
    getAllProducts: (req, res) => {
        product.find()
            .then(allProducts => { console.log('prducts=', allProducts); res.json(allProducts) })
            .catch(err => res.json(err));
    },
    //readtwo
    getOneProduct: (req, res) => {
        product.findById(req.params.id)
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err));
    },
    //update
    updateProduct: (req, res) => {
        product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err));
    },
    //delete
    deleteProduct: (req, res) => {
        product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }

}

