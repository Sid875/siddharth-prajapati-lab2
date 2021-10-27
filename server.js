//Student name: Siddharth Prajapati
//Student ID: 138969175
//WEB322: Lab 2

var HTTP_PORT = process.env.PORT || 3000;

var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded(({ extended: false })));

app.get("/", function(req,res){
    res.send("<h1 style='color: #7fffd4;'>Hello Heroku!</h1>");
});

const server = app.listen(HTTP_PORT, function() {
    console.log(`Listening on port ${HTTP_PORT}`);
});