var express = require('express')
  , cors = require('cors')
  , app = express();

var Client = require('node-rest-client').Client;
var client = new Client();
var parseString = require('xml2js').parseString;

app.use(cors());
 
app.get('/:imdbId', function(req, res, next){
	client.get("http://api.traileraddict.com/?width=000&imdb="+req.params.imdbId, function (data, response) {
		parseString(data.toString('utf-8'), function (err, result) {
			if(!err) {
				res.json(result);
			} // TODO Handle error
		});
	});

});
 
app.listen(8080, function(){
  console.log('CORS-enabled web server listening on port 8080');
});