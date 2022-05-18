// create function binary search to search sorted array of int

const binarySearch = (arr, searched) => {
    if (arr.length === 0) return -1

    let start = 0
    let end = arr.length
    let middle = Math.floor((end + start) / 2)

    while (searched !== arr[middle] && start <= end) {
        if (searched > arr[middle]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
        middle = Math.floor((end + start) / 2)
    }
    return searched === arr[middle] ? middle : -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6))