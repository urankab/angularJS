const express = require('express')
const router = express.Router()
const Rule = require('../models/Rule')

// GET ALL RULES
router.get('/', async (req, res) => {
    try {
        const posts = await Rule.find()
        res.json(posts);
    } catch (err) {
        res.json({ message: err.message })
    }
});

// CREATE A RULE
router.post('/', async (req, res) => {
    const rule = new Rule({
        content: req.body.content,
    });
    console.log(req.body)
    try {
        const savedRule = await rule.save()
        res.json(savedRule)
    } catch (err) {
        res.json({ message: err.message })
    }
});

module.exports = router;
