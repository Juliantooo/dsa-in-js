
const swap = (arr, idx1, idx2,) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const pivot = (arr, start = 0, right = arr.length - 1) => {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= right; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))