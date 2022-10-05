
// Course developed by Alvin Zablan from Coderbyte //



// fib

// const fib = (n) => {
//     const table = Array(n + 1).fill(0);
//     table[1] = 1;
//     for (let i = 0; i <= n; i++) {
//         table[i + 1] += table[i];
//         table[i + 2] += table[i];
//     }
//     return table[n]
// };

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50));

// gridTraveller

// const gridTraveller = (m,n) => {
//     const table = Array(m + 1)
//     .fill()
//     .map(() => Array(n + 1).fill(0));
//     table[1][1] = 1;
//     for (let i = 0; i <= m; i++) {
//         for (let j = 0; j <= n; j++) {
//             const current = table[i][j]; 
//             if (j + 1 <= n) table[i][j + 1] += current;
//             if (i + 1 <= m) table[i + 1][j] += current;
//         }
//     }

//     return table[m][n];
// };


// console.log(gridTraveller(3,2))
// console.log(gridTraveller(3,3))
// console.log(gridTraveller(3,5))
// console.log(gridTraveller(9,9))

// canSum

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true; 
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;

            }
        }
    }
    return table[targetSum];
};

console.log(canSum(7, [2,3]));
console.log(canSum(7, [5,3,4,7]));
console.log(canSum(7, [2,4]));
console.log(canSum(8, [2,3,5]));
console.log(canSum(300, [7,14]));


