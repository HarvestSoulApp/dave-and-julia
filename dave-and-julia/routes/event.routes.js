const express = require('express');
const Event = require('../models/Event.model');
const router = express.Router();



router.get('/eventCreate', (req, res, next) => {
    res.render('event/eventCreate')
})

router.post('/eventCreate', (req, res, next) => {
    const { date, description, location } = req.body
    Event.create({ date, description, location })
        .then((event) => {
            res.redirect(`/event/${event._id}`)
    })
});



router.get('/:eventId', (req, res, next) => {
    const eventId = req.params.eventId;
    Event.findById(eventId)
        .then((event) => {
            const  {date, description, location, _id} = event
        res.render('event/event', {date, description, location, _id})
    })
    
})


router.post('/:eventId/delete', (req, res, next) => {
    const eventId = req.params.eventId
    Event.findByIdAndDelete(eventId)
        .then(() => { res.redirect('/event/eventCreate') })
    
});

module.exports = router;