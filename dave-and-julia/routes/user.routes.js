const express = require('express');
const User = require('../models/User.model');
const router = express.Router();


router.get('/:id/edit', (req, res, next) => {
    const userId = req.params.id
    User.findById(userId)
        .then((theUser) => {
            res.render('profileEdit', theUser )    
    })
});

router.post('/:id/edit', (req, res, next) => {
    const userId = req.params.id;
    const { firstName, lastName, gender, dob, starSign, occupation, hobbies, lookingFor } = req.body;
    User.findByIdAndUpdate(userId, 
        {firstName, lastName, gender, dob, starSign, occupation, hobbies, lookingFor},
        {new:true} 
        )
    .then((updatedUser)=>{
        res.render('profileEdit', updatedUser)
    })
})


router.post('/:id/delete', (req, res, next) => {
    const userId =req.params.id
    User.findByIdAndDelete(userId)
        .then((deleted) => {
        res.redirect('/')
    })
});
module.exports = router;


