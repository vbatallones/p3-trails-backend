require('dotenv').config();
const express = require('express');
const app = express();
const cors= require('cors');
const port = process.env.PORT || 8000;
const passport = require('passport');

const users = require('./routes/api/users')
const trails = require('./routes/trails')
<<<<<<< HEAD
const usertrails = require('./routes/api/usertrails')
=======
const usertrails = require('./routes/usertrails')
>>>>>>> 3d2acaa38d9d2cf2af250ae6a6d4c74d8adb4b2b
// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/api/users', users)
app.use('/trails', trails)
<<<<<<< HEAD
app.use('/api/usertrails', usertrails)
=======
app.use('/usertrails', usertrails)

>>>>>>> 3d2acaa38d9d2cf2af250ae6a6d4c74d8adb4b2b

// passport middleware
app.use(passport.initialize());
// importing passport file into server
require('./config/passport')(passport);


// hidden home route
app.get('/', (req, res) => {
    res.status(200).json({ message: "smile, your being watch from the backend team"})
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
