const express = require('express');
const router = express.Router();
const db = require('../../models');

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



module.exports = router;
