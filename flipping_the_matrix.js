function flippingMatrix(matrix) {
    // Write your code here
    let n = matrix.length / 2;
    let max = 0;
    let total = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            max = -Infinity;
            max = Math.max(matrix[i][j], max);
            max = Math.max(matrix[i][2 * n - j - 1], max);
            max = Math.max(matrix[2 * n - i - 1][j], max);
            max = Math.max(matrix[2 * n - i - 1][2 * n - j - 1], max);

            total += max;
        }
    }
    return total;
}


const matrix = [[112, 42, 83, 119,],
[56, 125, 56, 49],
[15, 78, 101, 43],
[62, 98, 114, 108]]


console.log(flippingMatrix(matrix))