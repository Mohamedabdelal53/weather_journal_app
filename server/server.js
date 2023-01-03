// Setup empty JS object to act as endpoint for all routes


// Require Express to run server and routes
const cors= require('cors');
const express = require('express');
const bodyParser=require('body-parser');
const port=8000;

// Start up an instance of app

const app=express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('website'));

// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder


// Setup Server
const server=app.listen(port, listening)

function listening(){
    console.log(`server running on :http://localhost:${port}`)
}
projectData = []

app.get('/all', getData)

function getData (req, res) {
    res.send(projectData)
    console.log(projectData)
    projectData=[]//to can send any data more than one time
}

app.post('/add', addData)

function addData(req,res){
    newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content,
    name: req.body.name,
    }
    projectData.push(newEntry);
    res.send(projectData)
}