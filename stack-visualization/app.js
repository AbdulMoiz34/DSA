// Print console.log 5 times.

// what is recursion
// calling a function repeatedly until it reaches to the end is called a recursion.


// loop iterative
// for (let i = 1; i <= 5; i++) {
//     console.log("Hello");
// }


// Recursive way
// const print = (count) => {
//     if (!count) return;
//     console.log("Hello");
//     print(count - 1);
// }

// print(5);



// const print = (num) => {
//     if (num === 0) return;
//     print(num - 1);
//     console.log("print called:", num);
// }
// print(5);


// stack  || print(5) | print(4) | print(3) | Print(2) | print(1) 


// back tracking
// jab bhi function ke pop hote waqt jo bhi hold par hota hy woh execute hota hy


// Question: sum of n
// const sumOfN = (n) => {
//     if (n == 1) return 1;
//     return n + sumOfN(n - 1);
// }
// const res = sumOfN(5);
// console.log(res);


// Question: factorial of n

// const factorial = (n) => {
//     if (n == 1) return n;
//     return n * factorial(n - 1);
// }


// console.log(factorial(5));

// call stacks:
/*
factorial(1)
factorial(2) => 2 * 1 => 2
factorial(3) => 3 * 2=> 6
factorial(4) => 4 * 6 => 24
factorial(5) => 5 * 24=> 120
*/


// C function.
// C function. B function
//  C function. B function. A function


// https://javascript.info/recursion
// questions

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n

// Using Loop
// const sumTo = (num) => {
//     let res = 0;
//     for (let i = num; i >= 1; i--) {
//         res += i;

//     }
//     return res;
// }

// console.log(sumTo(100));
// console.log(sumTo(5));

// Using Recursion
// const sumTo = (n) => {
//     if (n === 1) return 1;
//     return n + sumTo(n - 1);
// }
// console.log(sumTo(5));
// console.log(sumTo(100));

// using arithmetic progression formula
// const sumTo = (n) => {
//     return n * (n + 1) / 2;
// }

// console.log(sumTo(100));

// const factorial = (n) => {
//     if (n == 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));


// fibonacci numbers
// series=> 0, 1, 1, 2, 3, 5, 8, 13, 21

// Iterative approach
// let n = 10;

// let first = 0;
// let second = 1;
// // 0 , 1, 1,2
// process.stdout.write(first + " " + second + " ");
// for (let i = 1; i <= n - 2; i++) {
//     const third = first + second;
//     first = second;
//     second = third;
//     process.stdout.write(third + " ");
// }


// Recursive
// let n = 10;
// process.stdout.write(0 + " " + 1 + " ");
// const fab = (n, first, second) => {//10 , 0 , 1
//     if (n == 0) return;
//     const third = first + second;
//     process.stdout.write(third + " ");
//     fab(n - 1, second, third);
// }
// fab(n - 2, 0, 1);




// sum of fabonacci series
const sum = (num) => {
    if (num == 0 || num == 1) return num;
    return sum(num - 1) + sum(num - 2);
}

// stack
// sum(1) + sum(0)=> hold
// sum(2) + sum(1)=> hold

// sum(3)
// 0,1,1, 2, 3,5,
console.log(sum(6));