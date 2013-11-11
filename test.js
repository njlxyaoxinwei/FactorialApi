var express = require('express');
var fac = require('./factorial');
//var http = require('http');
var app=express();
//var server= http.createServer(app);

// function factorial(number)
// {
// 	if (number>1)
// 		{return number*factorial (number-1)}
// 	else 
// 	{
// 		return 1

// 	}
// }
app.get('/:number',function(req, res){
	var num = req.params.number;
	res.end(JSON.stringify({ result: String(fac.factorial(num))}));

});
app.listen(process.env.PORT || 8080);
