const http = require('http')
const port = 5500
const formidable = require('formidable');
const fs = require('fs');

http.createServer((req, res) => {
    //Include the Formidable module to be able to parse the uploaded file once it reaches the server.
    //When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.
    //When a file is successfully uploaded to the server, it is placed on a temporary folder.
    //The path to this directory can be found in the "files" object, passed as the third argument in the 
    //parse() method's callback function.
    if (req.url === "/fileupload") {
        const form = new formidable.IncomingForm()
        form.parse(req, (err, fields, files) => {
            const oldPath = files.filetoupload.path
            const newPath = 'C:/Users/Kapil Raghuwanshi/Desktop/' + files.filetoupload.name
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;
                res.write('File Uploaded Successfully and moved...')
                res.end()
            })
        })
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<form action="fileupload" method="POST" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit">')
        res.write('</form>')
        res.end()
    }
}).listen(port)
console.log(`Server started successfully localhost at - ${port}`)
