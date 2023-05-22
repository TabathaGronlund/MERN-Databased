
const author = require('../models/author.model');


module.exports = {

    createAuthor: (req, res) => {
        author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status().json(err));
    },
    getAllAuthor: (req, res) => {
        author.find()
            .then(allAuthor => { console.log('author=', allAuthor); res.json(allAuthor) })
            .catch(err => res.json(err));
    },
    getOneAuthor: (req,res) => {
        author.findById(req.params.id)
        .then(oneAuthor => { console.log('author=', oneAuthor); res.json(oneAuthor)})
        .catch(err => res.json (err));
    },
    updateAuthor: (req, res) => {
        author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.json(err));
    },
    deleteAuthor: (req, res) => {
        author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }

}

