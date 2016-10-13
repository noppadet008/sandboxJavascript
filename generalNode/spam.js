var d = [];
class S{
    constructor(){
        this.name = "slslsl";
    }
}
try{
    while(1){
        d.push(new S());
        if(d.length%1000000 === 0)
            console.log(d.length);
    }
}catch(err){
    console.error(err);
}


