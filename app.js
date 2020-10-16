var express = require('express')
var moment = require('moment')

var app = express()

//service static content 'webpages'
app.use(express.static(__dirname + '/public'));

var log = function(message){
    var time = moment().format()
    console.log('[Server] @'+time+' '+message)
}

//creating function that takes two numbers, adds them and return the result
var add = function(num1,num2){
    var result = num1+num2
    return result;
}

//creating function that takes two numbers, subtract them and return the result
var subtract = function(num1,num2){
    var result2 = num1-num2
    return result2;
}

//end point for addition
app.get('/adder', function (req, res){
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    let result = add(num1, num2);
    res.send(' The sum is ' + result);
})

//end point for subtraction
app.get('/subtractor', function (req, res){
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    let result2 = subtract(num1, num2);
    res.send(' The subtraction is ' + result2);
})

var port = 8080;
app.listen(port)
log("server listening on port "+ port)