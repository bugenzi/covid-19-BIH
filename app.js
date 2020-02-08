const express = require('express')
const path = require('path')
const noris = require('./public/noris')
const request = require('request');

const url = 'https://api.chucknorris.io/jokes/random';

const app = express()

const viewPath = path.join(__dirname, '/views');

console.log(viewPath);
app.use(express.static(viewPath))
app.use(express.static(__dirname + '/public/src'));
//app.use(express.static(__dirname+'/public/src/img'));




let chuky = noris.joke;
console.log(chuky);


app.get('/noris', (req, res) => {
    request({ url, json: true }, (error, response) => {
        res.send({
            joke: response.body.value
        })

    })
})

app.listen(3000, () => {
    console.log("Server is  on port 3000");

})