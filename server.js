

const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

const postRouter = require('./routes/postRoute')

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });


const app = express()

app.use(bodyParser.urlencoded({ extended: false },{ useNewUrlParser: true } ))

app.use(bodyParser.json())

app.use('/api/posts', postRouter)


app.listen(8080, () =>{
     console.log('our app is on fire and yes');
     
})



