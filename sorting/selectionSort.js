const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        i !== lowest && swap(arr, i, lowest)
    }
    return arr
}


const slctionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        // set default lowest index
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            // change lowest (index) thath has smallest value. (loop until end array)
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        // swap
        lowest !== i && swap(arr, i, lowest)
    }
    return arr
}

console.log(slctionSort([2, 6, 7, 3, 12, 9, 5, 10, 4, 1, 13]))