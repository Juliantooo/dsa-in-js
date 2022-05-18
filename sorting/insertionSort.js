const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}


const insrtionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = currentValue
    }
    return arr
}

console.log(insrtionSort([2, 6, 7, 3, 1, 12, 9, 5, 10, 4, 1, 13]))