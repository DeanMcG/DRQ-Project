const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Mongo Connector
const myConnectionString = 'mongodb+srv://admin:MyPassword2013@cluster0.zepev.mongodb.net/reviews?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

var reviewSchema = new Schema({
    name: String,
    address: String,
    image: String,
    description: String
});

var ReviewModel = mongoose.model("review", reviewSchema);

app.get('/api/reviews', (req, res) => {


    // const myreviews = [
    //     {
    //     "Name": "Avengers: Infinity War",
    //     "Address": "2018",
    //     "imdbID": "tt4154756",
    //     "Type": "review",
    //     "Image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //     "Name": "Captain America: Civil War",
    //     "Address": "2016",
    //     "imdbID": "tt3498820",
    //     "Type": "review",
    //     "Image": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     }
    //     ];
   
        ReviewModel.find((err, data) => {
            res.json(data);
        })

        // res.json({review:myreviews});
})

app.get('/api/reviews/:id', (req,res)=>{
    console.log(req.params.id);

    ReviewModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

app.delete('/api/reviews/:id',(req,res)=>{
    console.log("Delete Review: "+req.params.id);

    ReviewModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

app.post('/api/reviews', (req,res) => {
    console.log('Review Received!');
    console.log(req.body.name);
    console.log(req.body.address);
    console.log(req.body.image);
    console.log(req.body.description);

    ReviewModel.create({
        name: req.body.name,
        address: req.body.address,
        image: req.body.image,
        description: req.body.description
    })
    res.send('Item Added');
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})

//Runs in terminal
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})