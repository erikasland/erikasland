var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/client')));
app.listen(8000, function(){
    console.log("You're on 8000, enjoy the ride!");
})