//WebScrapper - download the html page/website from given URL;build a script to download webpages;

const http = require('http');
const path = require('path');
const fs = require('fs');
const uuidv1 = require('uuidv1');

const downloadPage = (url = 'http://nodeprogram.com') => {
    console.log(`Downloading - ${url}`);
    const fetchPage = (urlF, callback) => {
        http.get(urlF, (response) => {
            let buff = '';
            response.on('data', (chunk) => {
                buff += chunk;
            })
            response.on('end', () => {
                callback(null, buff);
            })
        }).on('error', (error) => {
            console.error(`Got error: ${error.message} `);
            callback(error);
        })
    }

    //You need to create a unique folder name using the npm module uuid
    const folderName = uuidv1();
    fs.mkdirSync(folderName);
    fetchPage(url, (error, data) => {
        if (error)
            return console.log(error);
        fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url);
        fs.writeFileSync(path.join(__dirname, folderName, 'downloadedFile.html'), data);
        console.log('Downloading is done in folder ', folderName);
    });
}

downloadPage(process.argv[2]);
// run 
// node webCrawler.js http://courses.edx.org/