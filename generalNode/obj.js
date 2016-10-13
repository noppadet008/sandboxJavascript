'use strict';

var nodet = {exe:'this'};
console.log(nodet);
console.log(JSON.stringify(nodet,null,4));
nodet.a = 'ok';
console.log(JSON.stringify(nodet,null,4));