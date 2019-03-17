var http = require('http');
var fs = require('fs');

// We are specifying which file we are reading from stream.
// This is going to read the data from the file in chunks.
var myReadStream = fs.createReadStream(__dirname + '/readme.txt');

// we can recognise piece by piece of data when it reads.
// we can do that because createReadStream inherits from eventEmitter.

// There is a event called 'data' which allows us to listen to when we recieve data from stream.

myReadStream.on('data', (dataBlock) => {
  console.log('Data chunk incoming!!!!');
  console.log(dataBlock);
})

// The benefit to above stream is that everytime we get a data we can send it on to client
// chunk by chunk using writeable stream rather than waiting for the whole thing to be read.
