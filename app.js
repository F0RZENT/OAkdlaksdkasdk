const express = require("express");
const {request, response} = require("express");
const bodyParser = require("body-parser");
const app = express();

const main = require("./view/content/main");
const aboutme = require("./view/content/aboutme");
const games = require("./view/content/filmsfav");
const pcspec = require("./view/content/favgames");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.send(main)
})

app.get('/aboutme', (request, response) => {
    response.send(aboutme)
})

app.get('/favgames', (request, response) => {
    response.send(games)
})

app.get('/filmsfav', (request, response) => {
    response.send(films)
})

app.listen(9000, () => {
    console.log("Сервер запущен, порт: 9000.")
})