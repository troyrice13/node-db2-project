// DO YOUR MAGIC
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    res.json('yo')
});

router.get('/:id', async (req, res, next) => {
    res.json('yo')
});

router.post('/', async (req, res, next) => {
    res.json('yo')
});

module.exports = router;