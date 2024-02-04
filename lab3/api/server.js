const utils = require('./modules/util.js'); // Make sure this path is correct
const http = require('http');
const url = require('url');
const message = require("./lang/en/en.js")

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let name = req.url.split("=")[1];
  // Use the `getDate` method from `utils` module
  let currentDate = utils.getDate();
  // Now use `currentDate` to get the date
  res.write(`<p style="color: blue;">${message.greeting.replace("%1",name)} ${currentDate.toString()}</p>`);
  res.end();
}).listen(8080);
