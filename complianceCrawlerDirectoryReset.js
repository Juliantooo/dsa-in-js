

const ComplianceCrawlerDirectoryReset = (arr) => {
    let currentPath = [];
    while (arr.length > 0) {
        if (arr[0] != './' && arr[0] != '../') {
            currentPath.push(arr[0]);
        } else if (arr[0] === '../') {
            currentPath.pop();
        }
        arr.shift()
    }
    return currentPath.length
}


const arr = ['F1/', 'F2/', './', 'F3/', '../', 'F31/'];
// const arr = ['F1/', '../', '../']

console.log(ComplianceCrawlerDirectoryReset(arr))