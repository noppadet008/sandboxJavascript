var http = require('http');

http.get('http://www.google.com/index.html', (res) => {
  console.log(`Got response: ${res.body}`);
  // consume response body
  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});