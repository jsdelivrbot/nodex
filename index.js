var express = require('express')
var app = express()
const path = require('path')
const radio = require('radio-stream')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('rrrrrrrrrrrrrrroooooo!')
})
app.get('/id/:videoId', (request, response) => {
									 
		  const videoId = request.params.videoId
		  
		  var str = "Hello World!";
   var n = videoId.length;
			         console.log("aaaaaaaaaaaa",videoId);

				
		 if(isNaN(n) || n > 4){

		 }else{
		 			 		 var num1 = "/stream";

		 }
							 
	var station = "http://s2.netradiofm.com:"+videoId;

// Connect to the remote radio stream, and pass the raw audio data to any
// client requesting the "/stream" URL (will be an <audio> tag).
var stream = radio.createReadStream(station);


						 
if (num1) {
    var connected = function() {
      var headers = {};
      for (var key in stream.headers) {
        if (key == 'icy-metaint') continue;
        headers[key] = stream.headers[key];
      }
      res.writeHead(200, headers);
      var callback = function(chunk) {
        res.write(chunk);
      }
      stream.on("data", callback);
      req.connection.on("close", function() {
        // This occurs when the HTTP client closes the connection.
	  stream.connection.destroy();

        stream.removeListener("data", callback);
      });      
    }
    if (stream.connected) {
      connected();
    } else {
      stream.on("connect", connected);
    }
  } else if (req.url == "/metadata") {
    var callback = function(metadata) {
      stream.removeListener("metadata", callback);
      res.writeHead(200, {
        'Content-Type':'application/json'
      });
      res.end(radio.parseMetadata(metadata).StreamTitle);
    }
    stream.on("metadata", callback);
  } else {
    	res.send('Tu Radio Info!')

	
  }

 
 

 
})




app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
