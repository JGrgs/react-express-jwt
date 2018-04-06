const
    express = require('express'),
    barsRouter = new express.Router(),
    Bar = require('../models/Bar.js'),
    { verifyToken } = require('../serverAuth.js')

barsRouter.get('/', (req, res) => {
        Bar.find({}).populate('user').exec((err, bars) => {
            res.json(bars)
        })
})

barsRouter.use(verifyToken)

barsRouter.post('/', (req, res) => {
    // new bar will be created including all fields from form + a user key(current user)
    Bar.create({...req.body, user: req.user}, (err, bar) => {
        res.json({success: true, message: "New bar posted.", bar})
    })
})

module.exports = barsRouter

