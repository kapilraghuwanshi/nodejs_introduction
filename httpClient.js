const https = require('https')
const http = require('http')

url = 'https://mockbin.com/bin/e3830e1e-525e-498c-9b52-bde009a6d65b/view'

https.get(url, (response) => {
    let rawData = ''
    response.on('data', (chunk) => {
        rawData += chunk
    })
    response.on('end', () => {
        try {
            const parseData = JSON.parse(rawData)
            console.log(parseData);
        } catch (err) {
            console.error(err.message)
        }
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`);
})


///////////////////////POST//with///request//method////////////////////////////////////////////////

const postData = JSON.stringify({ foo: 'bar' })

const options = {
    hostname: 'mockbin.com',
    port: 80,
    path: '/request?foo=bar&foo=baz',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const myReq = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(`Body: ${chunk}`);
    })
    res.on('end', () => {
        console.log(`No data in response`);
    })
})

myReq.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
})

myReq.write(postData)
myReq.end()