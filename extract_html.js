#! /usr/bin/env node
const testFolder = './json/'
const fs = require('fs')
const jsonic = require('jsonic')
let obj
fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        obj = jsonic(
            fs.readFileSync(
                './json/' + file,
                'utf8'
            )
        )
        newFile = file.substr(0, file.lastIndexOf(".")) + ".html"
        fs.writeFileSync('./html/' + newFile, obj.__content, 'utf8')
    })
})