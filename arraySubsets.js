
const arraySubset = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log('sum', sum)
    arr.sort((a, b) => a - b);
    console.log('arr sort', arr);
    let cur = 0;

    for (let i = 0; i < arr.length; i++) {
        cur += arr[i];
        if (2 * cur > sum) {
            // return arr.slice(i) //to get the array
            return arr.slice(i).reduce((res, num) => res + num, 0)
        }
    }
    return -1
}
// const arr = [2, 3, 4, 4, 5, 9, 7, 8, 6, 10, 4, 5, 10, 10, 8, 4, 6, 4, 10, 1]
const arr = [3, 7, 5, 6, 2]
console.log(arraySubset(arr))