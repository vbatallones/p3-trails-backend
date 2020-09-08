require('dotenv').config();
const express = require('express');
const app = express();
const cors= require('cors');
const port = process.env.PORT || 8000;
const passport = require('passport');

const users = require('./routes/api/users')
const trails = require('./routes/trails')
const usertrails = require('./routes/api/usertrails')
// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/api/users', users)
app.use('/trails', trails)
app.use('/api/usertrails', usertrails)

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
