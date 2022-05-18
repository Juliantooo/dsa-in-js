// pivot is helper to find the correct index for current value position 

const swap = (arr, idx1, idx2,) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))