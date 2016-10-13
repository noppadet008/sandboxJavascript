
var Q = require('q');

var s = Q.all([
    eventualAdd(2, 2),
    eventualAdd(10, 20)
]).then(function(cc){
    console.log(cc);
}).done();

console.log(s);

function eventualAdd(a, b) {
    return Q.spread([a, b], function (a, b) {
        return a + b;
    })
}