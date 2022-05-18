

// the goal is make all array value same, so.. instead increasing value by 1 except the largest,
// we do decrease all array value to the smallest.
// so the target is find smallest value and multiple it by arr.lengt!
//  while we looping to find smallest value, we also do sum all array value
// in the end subtract arrSum - (total minimum array value * arr.length)!!!!!
// function printMinOp(arr) {
//     let arraySum = 0;
//     let smallest = arr[0];

//     for (i = 0; i < arr.length; i++) {

//         /*
//          * If current element is smaller than update smallest
//          */
//         if (arr[i] < smallest)
//             smallest = arr[i];

//         /* find array sum */
//         arraySum += arr[i];
//     }

//     // array sum when all elements are same and smallest
//     const arraySumWhenAllElementIsSmallest = (arr.length * smallest);
//     const minOperation = arraySum - arraySumWhenAllElementIsSmallest;

//     /* Print min operation required */
//     return minOperation

// }

const printMinOp = (arr) => {
    arr.sort((a, b) => a - b);
    let count = 0;
    let max;
    let changeCount = 0;

    while (new Set(arr).size > 1) {
        max = arr[arr.length - 1];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] <= max && changeCount < arr.length - 1) {
                arr[j]++
                changeCount++
            }
        }
        count++
        changeCount = 0;
        arr.sort((a, b) => a - b);
        console.log(arr)
    }

    return count
}

const arr = [3, 4, 6, 6, 3, 10];


console.log(printMinOp(arr))