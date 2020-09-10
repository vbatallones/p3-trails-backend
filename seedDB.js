const  db = require('./models');

db.User.create({
    name: 'Mom',
    email: 'mom@mom.com',
    password: 'Sunday1990',
    userTrails: []
  }).then(user => {
    db.Trail.create({
       name: "mt mt mountain"
      }).then(trail => {
        // add recipe to author
        db.User.findByIdAndUpdate(user._id,
          {$push: {userTrails: {
            _id: trail._id,
            name: trail.name
        }}}
          ).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
      }).catch(err=>console.log(err))