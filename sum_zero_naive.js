// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }


function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        }

        if (sum > 0) {
            right -= 1
        } else {
            left += 1
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))