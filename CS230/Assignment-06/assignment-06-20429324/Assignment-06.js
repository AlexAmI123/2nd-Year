/* 
Windows 10
Author : Alex Majka 20429324
Written up on the most recent version of Brackets.
tested using nodejs with MongoDB Atlas

Some of this code is based on John Keating's test_crud_docs.js
Alot of this code was also made with the help of w3 schools:
https://www.w3schools.com/nodejs/nodejs_mongodb.asp


This code runs occasionally due to the fact that for some weird reasons my async functions run not in order as they should. For example the delete function might run first and return an error istead of the insert function. Similarly the joins might run first before the inserts(this does not return errors). The main cause of this error is the delete statements, they are commented out for marking reasons, during testing they can be uncommented to check how this error occurs
*/
const express = require('express');         // we're making an ExpressJS App
const bodyParser = require('body-parser');  // we'll use body-parser extensively

const app = express();                      // create the ExpressJS app

const hbs = require('hbs');                 // use hbs view engine
const path = require('path');               // use the path module (for views)

// parse the different kinds of requests (content-type) the app handles
// use the "use" method to set up the body-parser middlewear
app.use(bodyParser.json())                          //  application/json
app.use(bodyParser.urlencoded({ extended: true }))  // pplication/x-www-form-urlencoded

// Set up Mongoose and our Database connection
const dbConnect = require('./config/connect.js');
const mongoose = require('mongoose');

// Set up connection to the database
mongoose.connect(dbConnect.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the MongoDB database");    
}).catch(err => {
    console.log('Unable to connect to the MongoDB database', err);
    process.exit();
});

require('./app/routes/users.routes.js')(app);

// listen for requests on port 3000
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
/*
Database Design:
I designed this db by using 3 different collections; users, phones and orders. These all correspond with eachother. The orders collection is the connection point of the other two collections
I assigned id's to all elements in the collections so that they can be queried with no hassle.
*/