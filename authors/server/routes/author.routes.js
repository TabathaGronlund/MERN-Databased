const authorController = require('../controllers/author.controller')
module.exports = app => {

    app.get('/api/author', authorController.getAllAuthor);
    app.get('/api/author/:id', authorController.getOneAuthor);
    app.post('/api/author', authorController.createAuthor);
    app.patch('/api/author/:id', authorController.updateAuthor);
    app.delete('/api/author/:id', authorController.deleteAuthor);
}