var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, "one"); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, "two"); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
  reject("reject");
});

var q = require('q');

q.any([p1,p2,p3,p4,p5])
.then(function(result){
    console.log(result);
});