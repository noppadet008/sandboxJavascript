


function e(){
    return Promise.resolve('from function e');
}


var s = e().then(function(x){console.log('ssss');return Promise.resolve(x);})

setTimeout(function(){
    console.log(s);

},1000)
