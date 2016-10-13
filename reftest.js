function x(param){
    editname(param);
    console.log(param);
}
var s = {name : 'namedefault'}
x(s);


function editname(param){
    param.name = 'edited';
}