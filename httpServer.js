const http = require('http')
const url = require('url')
const port = 5000

http.createServer((req, res) => {
    console.log(`${req.headers} - ${req.method} - ${req.statusCode}`)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`Hello kapil...........`)
    // hit url - http://localhost:5000/?year=1992&month=march
    const myQuery = url.parse(req.url, true).query
    res.write(`${myQuery.year} and ${myQuery.month}`)
    res.end()
}).listen(port)

console.log(`Your server is running locathost at port - ${port}`)

/////////////////process incoming request with payload///////////////

http.createServer((req, res) => {
    console.log(`${req.headers} - ${req.method} - ${req.statusCode}`)
    // hit url - http://localhost:5000/?year=1992&month=march
    const myQuery = url.parse(req.url, true).query
    res.write(`${myQuery.year} and ${myQuery.month}`)
    if (req.method === 'POST') {
        let buff = ''
        req.on('data', (chunk) => {
            buff += chunk
        })
        req.on('end', () => {
            console.log(`body - ${buff}`)
            res.end(`Accepted the payload`);
        })
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end(`Hey Kappiiee`)
    }
}).listen(port)