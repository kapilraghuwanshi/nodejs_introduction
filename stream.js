var fs = require("fs");
var data = '';
// Create a readable stream 
var readerStream = fs.createReadStream('mynewfile.txt');
// Set the encoding to be utf8 
readerStream.setEncoding('UTF8');
// Handle stream events --> data, end, and error  
readerStream.on('data', (chunk) => {
    data += chunk;
    // console.log(data);
});
readerStream.on('end', () => {
    console.log(data);
});
readerStream.on('error', (err) => {
    console.log(err.stack);
});
console.log("Program Ended");   
////////////////////////////////////////////////////
var data = 'A Solution of all Technology';
// Create a writable stream  
var writerStream = fs.createWriteStream('output.txt');
// Write the data to stream with encoding to be utf8  
writerStream.write(data, 'UTF8');
// Mark the end of file  
writerStream.end();
// Handle stream events --> finish, and error  
writerStream.on('finish', function () {
    console.log("Write completed.");
});
writerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log("Program Ended"); 
///////////////////piping////////////////////////
// Create a readable stream  
var readerStream = fs.createReadStream('mynewfile.txt');
// Create a writable stream  
var writerStream = fs.createWriteStream('output.txt');
// Pipe the read and write operations  
// read input.txt and write data to output.txt  
readerStream.pipe(writerStream);  