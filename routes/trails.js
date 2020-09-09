const express = require('express');
const router = express.Router();
const db = require('../models');
// const Trail = require('../models/Trail')

// Show/Detail
router.get('/:id', (req, res) => {
    db.Trail.findById(req.params.id)
        .then((trails) => {
            res.status(200).json(trails);
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// Create
router.post('/create', (req, res)=>{
    // console.log(req.body)
    db.Trail.create(req.body)
    .then(newTrail => {
        console.log('this is the user🤯')
        console.log("this is the body🥵", req.body)
        console.log(newTrail)
        // res.status(201).send(newTrail)
        db.User.findByIdAndUpdate( req.body.currentUser._id, //req.body.currentUser
            {$addToSet: { userTrails: newTrail}},
            {safe: true}
        )
        .then((updated)=>res.send(updated))
        .catch(err=>res.send({ message: 'Error in adding newTrail to user', err}));
    
    })
    .catch(err=>{
        console.log('Error while creating', err)
        if(err.name === 'ValidationError'){
            res.status(406).send({message: 'Validation Error'})
        } else {
            res.status(503).send({message:'Database or server error!'})
        }
    })
    // res.send('You\'ve hit the POST /bounties route!')
})



module.exports = router;