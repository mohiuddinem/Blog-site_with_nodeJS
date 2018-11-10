

const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

const postRouter = require('./routes/postRoute') 

mongoose.connect('mongodb://localhost/test', () => {
    console.log("Db is connected")
});


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/api/posts', postRouter)


app.listen(8080, () =>{
     console.log('our app is on fire and yes');
     
})



