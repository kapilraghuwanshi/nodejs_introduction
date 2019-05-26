// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);
console.log(buf1);
const buf2 = Buffer.alloc(10, 'a');
console.log(buf2);
const buf3 = Buffer.alloc(10, 55);
console.log(buf3);
const buf5 = Buffer.alloc(10, 10);
console.log(buf5);
////////////////////////////////////
var buf = Buffer.from('abc');
console.log(buf);
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);
////////////////////////////////////
const buf6 = Buffer.from('hello world', 'ascii');
console.log(buf6.toString('hex'));
console.log(buf6.toString('utf8'));
console.log(buf6.toString('base64'));
console.log(buf6.toString('ascii'));
console.log(Buffer.from('fhqwhgads', 'ascii'));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>