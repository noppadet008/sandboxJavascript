//function  .call instead ()
toClass = {}.toString;

var type = [{},undefined,null,[],[1],NaN,2,'ssss',"ddddd",''];

type.forEach(function(each){
    if(each)
        console.log(typeof each+"   "+{}.toString.call(each));
    else
        console.log('if1 not involve');


    if(toClass.call(each) ==  toClass.call([]))
        console.log('if2 involve');
    else
        console.log('if2 not involve');
});