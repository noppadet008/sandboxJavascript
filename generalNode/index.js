var http =  require('http');
var manman = require('./test1.js');


manman.name = [];


console.log(manman.name[0]);
console.log(manman.age);
class sss{
    constructor(test){
        this.test = test;
    }
}


var g = new sss('test');
var s = '{"test":"test"}'
console.log(JSON.stringify(g));
console.log(s);