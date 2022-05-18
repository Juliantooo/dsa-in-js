function findSubsets(subset, arr, output, index) {

    // Base Condition
    if (index == arr.length) {
        subset.push(output);
        return;
    }

    // Not Including Value which is at Index
    findSubsets(subset, arr, [...output], index + 1);

    // Including Value which is at Index
    output.push(arr[index]);
    findSubsets(subset, arr, [...output], index + 1);
}

let subset = [];
const arr = [1, 2, 3]
findSubsets(subset, arr, [], 0)
console.log(subset)