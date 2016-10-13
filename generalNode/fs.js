var fs = require('fs'),
    path = require('path');

var s = [];

s = s.concat(fs.readdirSync('./','utf8'));

console.log(s);



function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

console.log(getDirectories('./'));