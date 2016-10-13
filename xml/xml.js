'use strict';

var fs = require('fs');
var xml2js = require('xml2js');
var xml = fs.readFileSync('./test.xml');

var extractedData = "";
var parser = new xml2js.Parser();
parser.parseString(xml, function(err,result){
  //Extract the value from the data element
  if(err) console.error(err);
  console.log(result.Connections.Node);
});
console.log("Note that you can't use value here if parseString is async; extractedData=", extractedData);