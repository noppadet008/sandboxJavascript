

function e(input){
    console.log(input);
    return /.*[Ww]indow.*/g.test(input);
}

console.log(e(process.argv[2]));