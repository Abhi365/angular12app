var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://abhi:abhi@ds129333.mlab.com:29333/meantodos_abhi_db', ['todos']);

router.get('/todos', function(req, res, next) {
    db.todos.find(function(err, todos) {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    })
});

module.exports = router;