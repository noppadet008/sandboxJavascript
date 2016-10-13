function m(){
    console.log(1);
    console.log(2);
    n();
    console.log(4);
    console.log(5);
    console.log(6);
}
function n(){
    setTimeout(function() {
        console.log(3);
    }, 1000);

}
m();