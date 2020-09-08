const express = require('express');
const router = express.Router();
const db = require('../models');
<<<<<<< HEAD

// Show/Detail
router.get('/:id', (req, res) => {
	db.Trail.findById(req.params.id)
		.then((trails) => {
			res.status(200).json(trails);
		})
		.catch((err) => res.status(500).json({ error: err }));
=======
// const Trail = require('../models/Trail')

// Show/Detail
router.get('/:id', (req, res) => {
    db.Trail.findById(req.params.id)
        .then((trails) => {
            res.status(200).json(trails);
        })
        .catch((err) => res.status(500).json({ error: err }));
>>>>>>> 3d2acaa38d9d2cf2af250ae6a6d4c74d8adb4b2b
});

// Create
router.post('/create', (req, res)=>{
    console.log(req.body)
    db.Trail.create(req.body)
    .then(newTrail => {
        console.log(newTrail)
        res.status(201).send(newTrail)
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



<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 3d2acaa38d9d2cf2af250ae6a6d4c74d8adb4b2b
