const express = require('express')
const router = express.Router()
const Person = require('../models/Person')

// GET ALL PEOPLE
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.json(people);
    } catch (err) {
        res.json({ message: err.message })
    }
});

// CREATE A PERSON
router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        province: req.body.province,
        postal_code: req.body.postal_code,
    });
    console.log(req.body)
    try {
        const savedPerson= await person.save()
        res.json(savedPerson)
    } catch (err) {
        res.json({ message: err.message })
    }
});

module.exports = router;
