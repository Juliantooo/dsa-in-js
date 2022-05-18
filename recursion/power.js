

function power(num,p){
    if(p===0)return 1;
    if(p===1)return num;

    return num*power(num,p-1)
}

console.log(power(2,4))