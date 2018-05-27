const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/survey', (req, res) => {
    res.render('survey');
});

module.exports = router;