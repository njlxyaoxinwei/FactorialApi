var express = require('express');
//var http = require('http');
var app=express();
//var server= http.createServer(app);

function factorial(number)
{
	if (number>1)
		{return number*factorial (number-1)}
	else 
	{
		return 1

	}
}
app.get('/:number',function(req, res){
	var num = Number(req.params.number);
	res.end(JSON.stringify({ result: String(factorial(num))}));

});
app.listen(8080);
