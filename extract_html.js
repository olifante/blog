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
        console.log(obj.__content)
    })
})