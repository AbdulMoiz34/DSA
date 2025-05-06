// FIND HCF OR GCD
// const num1 = 70;
// const num2 = 140;

// const findHCF = (num1, num2) => {
//     const min = Math.min(num1, num2);
//     for (let i = 12; i >= 1; i--) {
//         if (num1 % i == 0 && num2 % i == 0) {
//             console.log(i);
//             break;
//         }
//     }
// }

// findHCF(num1, num2);


// Optimize Approach.

// 32 20
// 12 20
// 12 08
// 4 08
// 4 4

// const hcf = (num1, num2) => {
//     if (num1 === num2) return num1;
//     else if (num1 > num2) return hcf(num1 - num2, num2);
//     else return hcf(num1, num2 - num1);
// }

// console.log(hcf(100, 204));