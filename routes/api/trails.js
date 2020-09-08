const express = require('express');
const router = express.Router();
const db = require('../../models');


// .catch(err => res.status(500).json({error: err}))

// Index
// router.get('/', (req, res) => {
// 	db.User.find()
// 		.then((trails) => {
// 			res.status(200).json(trails);
// 		})
// 		.catch((err) => res.status(500).json({ error: err }));
// });

// Show/Detail
router.get('/:id', (req, res) => {
	db.Trail.findById(req.params.id)
		.then((trails) => {
			res.status(200).json(trails);
		})
		.catch((err) => res.status(500).json({ error: err }));
});

// Create
// router.post('/create', (req, res)=>{
//     console.log(req.body)
//     db.Trail.create(req.body)
//     .then(newTrail => {
//         console.log(newTrail)
//         res.status(201).send(newTrail)
//     })
//     .catch(err=>{
//         console.log('Error while creating', err)
//         if(err.name === 'ValidationError'){
//             res.status(406).send({message: 'Validation Error'})
//         } else {
//             res.status(503).send({message:'Database or server error!'})
//         }
//     })
//     // res.send('You\'ve hit the POST /bounties route!')
// })

// Update
// router.put('/:id', (req, res) => {
// 	db.Trail.findByIdAndUpdate(req.params.id, req.body).then((updatedTrails) => {
// 		console.log(updatedTrails);
// 		res.status(200).json(updatedTrails);
// 	});
// });

// Destroy
// router.delete('/:id', (req, res) => {
// 	db.Trail.findByIdAndDelete(req.params.id).then((removed) => {
// 		res.status(200).json({ message: 'Successfully deleted country' });
// 	});
// });

module.exports = router;
