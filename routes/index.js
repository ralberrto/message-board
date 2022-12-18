var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Armando',
    added: new Date(),
  },
  {
    text: 'Hello, world!',
    user: 'Charlie',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {}) 
});

router.post('/new', function(req, res, net) {
  const newMessage = { text: req.body.messageBody, user: req.body.user, added: new Date() };
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
