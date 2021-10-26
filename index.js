const express = require('express')
const path = require('path');
const fs = require('fs');
const app = express()
const port = process.env.PORT||3000
//joining path of directory 
const directoryPath = path.join(__dirname, 'api/get');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (fileName) {
        const content = fs.readFileSync(path.join(directoryPath, fileName));
        app.get(`/${fileName.replace('.json','')}`, (req, res) => {
            res.send(JSON.parse(content.toString()))
        })
    });
});

app.get(`/`, (req, res) => {
    res.send('try http://localhost:3000/getTestData')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})