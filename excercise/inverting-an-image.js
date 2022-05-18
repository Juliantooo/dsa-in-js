const reverseImage = (image) =>{
    for(let i=0;i<image.length;i++){
        image[i] = image[i].reverse()
    }

    let res =[]
    
    for(let i=image.length-1;i>=0;i--){
        res.push(image[i])
    }

    return res
}

const img =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(reverseImage(img))