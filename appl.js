var http = require('http');
var url = "https://api.openweathermap.org/data/2.5/forecast?q=Sunnyvale,US&appid=0f0f782a925d519ed863c774486b22e0&units=metric";

var server = http.createServer(function(request,response){
	
	var request = require('request');
	request(url,function(err,res,body){
		var data = JSON.parse(body);
		response.write("<html><body><div id = 'container'>");
		response.write("<h1>" + 'CityName - : ' + data['name'] + '<br>' + "</h1>");
		response.write("<h2>" + 'MinTemperature - : ' + data.main['temp'] + '<br>' + "</h2>");
		//response.write("<h2>" + 'MaxTemperature - : ' + data['population'] + '<br>' + "</h2>");
		response.write("</div></body></html>");
		//console.log(body);
		//response.write('Hi');
		response.end();
		
	});
	
	
}).listen(8084);
