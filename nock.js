'use strict';


var nock = require('nock');


var s = nock('http://www.google.com')
                .get('/')
                .reply(200, 'Hello from Google!');
console.log(s);

var http = require('http');

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET',
};


var req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);

  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.end();