const express = require('express')
const ppl = require('./peopleModel')

const router = express.Router()

//-----------------------------------------------------------------------------
router.get('/', async (req, res, next) => {
    try {
        res.json(await ppl.find())
    } catch (err) {
        next (err)
    }
})
//-----------------------------------------------------------------------------
router.get('/:id', async (req, res, next) => {
    try {
        const person = await ppl.findById(req.params.id)
        if(!person) {
            return res.status(404).json({
                Message: "Person not found"
            })
        } res.json(person)
    } catch (err) {
        next (err)
    }
})
//-----------------------------------------------------------------------------
router.post('/', async(req, res, next) => {
    try {
        const person = await ppl.create(req.body)
        res.status(201).json(person)
    } catch (err) {
        next(err)
    }
})

module.exports = router