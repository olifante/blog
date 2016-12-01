#! /usr/bin/env node
const testFolder = './_posts/'
const fs = require('fs')
let oldFullContent, newFullContent, oldContent, newContent, frontMatter
fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        oldFullContent = fs.readFileSync(
            './_posts/' + file,
            'utf8'
        )
        frontMatter = oldFullContent.split('---\n')[1]
        console.log(file)
        newContent = fs.readFileSync(
            './markdown/' + file,
            'utf8'
        )
        newFullContent = '---\n' + frontMatter + '---\n\n' + newContent
        fs.writeFileSync(
            './_posts/' + file,
            newFullContent,
            'utf8'
        )
    })
})