'use strict';

let http = require('http');
let express = require('express');

let router = express.Router();

router.use(express.static(process.cwd() + '/client'));

router.get('/', function(req, res, next) {
  res.render('base', {
    title: 'Starter Kit',
    scripts: ['/js/app.js'],
    layout: 'main',
    styles: ['/css/style.css'],
  }, function (err, html) {
    res.send(html);
  });
});

router.all('*', function(req, res, next) {
  let error = new Error(`<code>${req.originalUrl}</code> does not exist.`);
  error.status = 404;

  next(error);
});

router.use(function(err, req, res, next) {
  let code = err.status;
  res.status(code);

  res.render('error', {
    status: {
      code,
      message: http.STATUS_CODES[code],
    },
    error: err
  }, function (err, html) {
    res.send(html);
  });
});

module.exports = router;
