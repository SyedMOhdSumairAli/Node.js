const http = require('http');
const fs = require('fs')
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.setHeader = ('Content-Type', "text/html")
    console.log(req.url)
    if (req.url == '/link') {
        res.statusCode = 200;
        res.end('<h1>this is work sever from my system</h1><p>lorem this this that that when a;fjdkjf sdjfdsj </p>');
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>this is work sever from my system</h1><p>lorem this this that that when a;fjdkjf sdjfdsj </p>');
    }
    else if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync("file2.html")
        res.end(data.toString());
    } else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1>');


    }
});
server.listen(port, () => {
    console.log(`my server is working properly ${port}`);
});