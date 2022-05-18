


const stockPicker = (arr) => {
    let min = arr[0];
    let dif = 0;
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i])
        dif = Math.max(dif, arr[i] - min);
    }

    return dif ? dif : -1
}


console.log(stockPicker([44, 30, 24, 22, 20, 18, 15, 110, 8]))