const fs = require('fs');
// fs.readFilen('file.txt', 'utf8', (err, data) => {
//     console.log(err, data)
// })
// const a = fs.readFileSync('file.txt')
// console.log(a.toString())
fs.writeFile('file2.html', 'hello world',()=> {
    console.log("file have")
})