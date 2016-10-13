


class s{
    constructor(){
        this.name = 's';
    }

    f(){
        var p = new s();
        console.log(this)
        console.log(s);
        console.log(p);
        console.log(this instanceof s);//error this
    
    }
    k(){
        delete this.name;
    }
}

class c{
    constructor(){
        this.name = 's';
    }
}

var g = new s();
console.log(g);
g.k();
console.log(g);