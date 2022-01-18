const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// set up our express app
const app = express();
app.use(cors());

// connect to mongodb
mongoose.connect('mongodb://localhost/test');

app.use(express.json());
// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 5000, function(){
    console.log('Ready to Go!');
});