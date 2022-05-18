function minimumLoss(price) {
    // Write your code here
    let dif = Infinity;
    for (let i = 0; i < price.length - 1; i++) {
        for (let j = i + 1; j < price.length; j++) {
            if (price[i] - price[j] < dif && price[i] - price[j] >= 0) {
                dif = price[i] - price[j];
            }
        }
    }
    return dif
}

// while
// function minimumLoss(price) {
//     // Write your code here
//     let dif = Infinity;
//     let start = 0;
//     let end = 1;

//     while (start < end && start < price.length) {
//         if (price[start] - price[end] < dif && price[start] - price[end] >= 0) {
//             dif = price[start] - price[end];
//         }

//         if (end < price.length) {
//             end++;
//         } else {
//             start++;
//             end = start + 1;
//         }
//     }

//     return dif
// }

// btter approach
// function minimumLoss(prices) {
//     // Write your code here
//     const indexes = {};
//     let minLoss = Infinity;

//     for (let i = 0; i < prices.length; i++) {
//         indexes[prices[i]] = i;
//     }
//     const sortedPrices = Object.keys(indexes).sort((a, b) => a - b);

//     for (let i = 0; i < sortedPrices.length - 1; i++) {
//         if (indexes[sortedPrices[i]] > indexes[sortedPrices[i + 1]]) {
//             minLoss = Math.min(minLoss, prices[indexes[sortedPrices[i + 1]]] - prices[indexes[sortedPrices[i]]]);
//         }
//     }
//     return minLoss;
// }



console.log(minimumLoss([20, 7, 8, 2, 5]))