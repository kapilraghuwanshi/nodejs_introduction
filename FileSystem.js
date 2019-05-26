const fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hello Kapil!', err => {
    if (err) throw err;
    console.log('file saved!');
});
///////////////////////////////////////////////////
// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('mynewfile.txt', 'r+', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
});
///////////////////////////////////////////////////
// Asynchronous read
fs.readFile('mynewfile.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
try {
    let data = fs.readFileSync('mynewfile.txt');
    console.log("Synchronous read: " + data.toString());
    console.log("Program Ended");
} catch (err) {
    console.error(err);
}
///////////////////////////////////////////////////

console.log("Going to get file info!");
fs.stat('mynewfile.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});
///////////////////////////////////////////////////
fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Appended!');
});
///////////////////////////////////////////////////
fs.writeFile('mynewfile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Written!');
});
///////////////////////////////////////////////////

///////////////////////////////////////////////////