// function closestNumbers(arr) {
//     // Write your code here
//     let start = 0;
//     let end = 1;
//     let dif = Infinity;
//     let result = [];

//     while (start < end && start < arr.length - 1) {
//         if (Math.abs(arr[start] - arr[end]) < dif) {
//             dif = Math.abs(arr[start] - arr[end]);
//             result = [arr[start], arr[end]]
//         } else if (Math.abs(arr[start] - arr[end]) === dif) {
//             result.push(arr[start])
//             result.push(arr[end])
//         }

//         if (end < arr.length) {
//             end++;
//         } else {
//             start++;
//             end = start + 1;
//         }
//     }

//     return result.sort((a, b) => a - b)

// }

// better approach
const closestNumbers = (arr) => {
    arr.sort((a, b) => a - b);

    let start = 0;
    let end;
    let dif = Infinity;
    let result = []
    while (start < arr.length - 1) {
        end = start + 1;

        if (Math.abs(arr[start] - arr[end]) < dif) {
            dif = Math.abs(arr[start] - arr[end]);
            result = [arr[start], arr[end]];
        } else if (Math.abs(arr[start] - arr[end]) === dif) {
            result.push(arr[start], arr[end]);
        }

        start++
    }

    return result
}

console.log(closestNumbers([5, 4, 3, 2]))