var http = require('http');
var fs = require('fs');

var handleRequest = http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type': 'text/html'});

  if (req.url === '/' || req.url === '/home'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  else if ( req.url === '/api/todos') {
   res.writeHead(200, {'Content-Type' : 'application/json'});
   todos =[
     {
       "Name": "Dragon Ball",
       "Found": 1984,
       "Description": "This is an Anime based on adventures of saiyan named Goku",
       "Members": ["Goku","Vegeta","Master Roshi","Krillin","Picollo","Gohan"],
       "Albums": ["Saiyan saga","Frieza Saga","Cell Saga","Buu Saga","Battle of gods"]
     }

   ]
   res.end(JSON.stringify(todos))
 } else {
   res.writeHead(404, {'Content-Type' : 'text/html'});
   fs.createReadStream(__dirname + '/404.html').pipe(res);
 }
});

http.createServer(handleRequest).listen(3000,'127.0.0.1');
console.log('Yo! Listening to 3000 port')
