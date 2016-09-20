const https = require('https');

https.get('https://compass.thomsonreuters.com?target=production.emea.postinstall.a&from=1472532480&until=1472532600&format=json', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d+"/n");
  });

}).on('error', (e) => {
  console.error(e);
});