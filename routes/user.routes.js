const express = require('express');
const router = express.Router();
const User = require("../models/User.model.js")
const mongoose = require("mongoose");

//2. TO FIGURE OUT THE ROUTES 
router.get('/createProfile',(req, res, next) => {
    res.render("createProfile")
      });

      
router.post('/createProfile', (req, res, next) => {
    const newProfile = req.body;
    User.findById(profileId)
    .then(() => res.redirect('/createProfile'))
    .catch(error => next(error));
  
  });

  //app.locals???
  

  router.get('/createProfile/:profileId/edit', (req, res, next) => {
    const {profileId} = req.params
   User.findById(profileId)
      .then(profileToEdit => {
        res.render('profile/createProfile.hbs', { drone: droneToEdit });
      })
      .catch(error => next(error));
  });

   router.post('/createProfile/:id/edit', (req, res, next) => {
    const editedProfile = req.body;
      User.findByIdAndUpdate(req.params.id, editedProfile, { new: true })
     .then(() => res.redirect('/createProfile'))
     .catch(error => next(error));
   
   
   });

// // router.get('/drones',(req, res, next) => {
// //    Drones.find({}, function(error,drones){
// //       if (error) return console.log(error)
// //      // console.log(data)
// //       res.render("drones/list", {drones})

// //     })
// // });

// // router.get('/drones/create', (req, res, next) => {
// //     res.render("drones/create-form")
// // });

// // router.post('/drones/create', (req, res, next) => {
// //   const newDrone = req.body;
// //   Drones.create(newDrone)
// //   .then(() => res.redirect('/drones'))
// //   .catch(error => next(error));

// // });

// // router.get('/drones/:droneId/edit', (req, res, next) => {
// //   const {droneId} = req.params
// //  Drones.findById(droneId)
// //     .then(droneToEdit => {
// //       res.render('drones/update-form.hbs', { drone: droneToEdit });
// //     })
// //     .catch(error => next(error));
// // });


// // router.post('/drones/:id/edit', (req, res, next) => {
// //   const editedDrone = req.body;

// //   Drones.findByIdAndUpdate(req.params.id, editedDrone, { new: true })
// //     .then(() => res.redirect(`/drones`)) 
// //     .catch(error => next(error));
// // });

// // router.post('/drones/:id/delete', (req, res, next) => {

// //   Drones.findByIdAndDelete(req.params.id)
// //     .then(() => res.redirect(`/drones`)) 
// //     .catch(error => next(error));
// // });


// module.exports = router;