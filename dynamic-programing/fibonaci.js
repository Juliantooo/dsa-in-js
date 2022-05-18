// using recursion approach
// const fibonaci = (n) =>{
//     if(n<=2){
//         return 1
//     }

//     return fibonaci(n-1) + fibonaci(n-2)
// }

// with DP approach => storing sub problem value, and if in the future we face same sub problem, we can use value from store (Memoization)

// const fibonaci = (n,memo=[])=>{
//     if(memo[n] !== undefined) return memo[n]
//     if(n<=2) return 1
    
//     let res = fibonaci(n-1,memo) + fibonaci(n-2,memo)
//     memo[n]=res
//     return res
// }

// DP tabulation bottom-> up

const fibonaci=(n)=>{
    if(n<=2) return 1
    const fibs = [0,1,1]

    for (let i = 3; i <= n; i++) {
        fibs[i] = fibs[i-1] + fibs[i-2]
    }

    return fibs[n]
}


console.log(fibonaci(38))


