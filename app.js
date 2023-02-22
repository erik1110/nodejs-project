// var http = require('http')
// http.createServer(function (request, response) {
//     console.log(request.url);
//     response.writeHead(200, { "Content-Type": "text/plain"});
//     response.write("Hello World!");
//     response.end();
// }).listen(8080);

const { v4: uuidv4} = require('uuid')
const a = uuidv4();

const obj = {
    "title": "YAAA",
    "id": uuidv4()
}

console.log(obj);