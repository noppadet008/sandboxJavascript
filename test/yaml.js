var yaml = require('yamljs');

var nativeObject = yaml.load('test.yaml');

console.log(nativeObject.nodename);
