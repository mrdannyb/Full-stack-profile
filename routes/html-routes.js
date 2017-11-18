const express = require('express');

module.exports = function (app) {
    app.get('/', function (req,res) {
      res.render('pages/main')
    });

    app.get('/projects', function (req,res) {
      res.render('pages/projects')
    });

    app.get('/contact', function (req,res) {
      res.render('pages/contact')
    })
};
