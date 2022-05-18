// Given an array, find the total number of inversions of it.
// If (i < j) and (A[i] > A[j]), then pair (i, j) is called an inversion of an array A. We need to count all such pairs in the array.
// ex:
// Input:  A[] = [1, 9, 6, 4, 5]
// Output: The inversion count is 5 
// There are 5 inversions in the array: (9, 6), (9, 4), (9, 5), (6, 4), (6, 5)



const merging = (arr1, arr2) => {
    let sortedArr = []
    let i = 0;
    let j = 0;
    let count = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] >= arr1[i]) {
            sortedArr.push(arr1[i])
            i++
        } else {
            sortedArr.push(arr2[j])
            count++
            j++
        }
    }

    while (i < arr1.length) {
        sortedArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        sortedArr.push(arr2[j])
        j++
    }

    return count
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return 1
    let count = 0
    let mid = Math.floor(arr.length / 2)
    count += mergeSort(arr.slice(0, mid))
    count += mergeSort(arr.slice(mid))
    count += merging(arr.slice(0, mid), arr.slice(mid))

    return count
}

const arr = [1, 20, 6, 4, 5]
console.log(mergeSort(arr))
