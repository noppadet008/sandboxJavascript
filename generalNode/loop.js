for(let i = 0;i<10;i++){
    if(i === 5||i === 2) continue;
    console.log(i);
}

var i = [1,2,3,4,5,6];

i.forEach((element)=>{
    if(element === 3)return;
    console.log('this is '+element);
})