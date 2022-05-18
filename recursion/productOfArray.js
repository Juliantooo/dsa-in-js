const productOfArray =(arr)=>{
    if(arr.length===1){
        return arr[0];
    }
    const poped = arr.pop()
    return poped*productOfArray(arr);
};


console.log(productOfArray([1,2,3]))