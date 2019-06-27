const { spawn } = require('child_process');

const childBat = spawn('cmd.exe', ['/d', 'myCmd.bat']);

childBat.stdout.on('data', (data) => {
    console.log(`childBat results -- ${data.toString()}`);
});

childBat.stderr.on('data', (data) => {
    console.log(data.toString());
});

childBat.on('exit', (code) => {
    console.log(`Child exited with error code ${code}`);
});
//////////////////////////////////////////////////////////////////////////////////////////
const child = spawn('pwd');

child.on('exit', (code, signal) => {
    console.log('child process exited with ' + `code ${code} and signal ${signal}`);
});

child.stdout.on('data', (data) => { 
    console.log(`child stdout:-- ${data}`); 
});

child.stderr.on('data', (data) => { 
    console.error(`child stderr:\n${data}`); 
});
////////////////////////////////////////////////////////////////////////////////////////