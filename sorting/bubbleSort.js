const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr

}

const swp = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const bbSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr
}


console.log(bubbleSort([2, 6, 7, 3, 12, 9, 5, 10, 4, 1, 13, 2, 1, 5, 14, 16, 10, 30]))

// no swap version | optimized
// const bubbleSort = (arr) => {
//     let noSwaps;
//     for (let i = arr.length; i > 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1)
//                 noSwaps = false;
//             }
//         }
//         if (noSwaps) break;
//     }
//     return arr;
// }
