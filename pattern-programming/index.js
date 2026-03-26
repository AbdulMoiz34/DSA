import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
* * * * * 
* * * * *
* * * * *
* * * * *
* * * * * 
*/

// rl.question("Enter a number?", (num) => {
//     for (let i = 1; i <= num; i++) {// num = 5, i = 1
//         for (let j = 1; j <= num; j++) {
//             process.stdout.write("* ");
//         }
//         console.log("");
//     }
//     rl.close();
// });


/* next question--> right-angle triangle 

* 
* *
* * *
* * * *
* * * * *
*/

// rl.question("Enter a number?", (num) => {

//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }
//         console.log("");
//     }

//     rl.close();
// });


// NEXT QUESTION
// IF N = 5
// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// rl.question("Enter a number?", (num) => { // 3

//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write(j + " ");
//         }
//         console.log("");
//     }

//     rl.close();
// });


// NEXT QUESTION->>
// A
// A B
// A B C
// A B C D
// A B C D E


// rl.question("Enter a number?", (num) => {
//     for (let i = 1; i <= num; i++) {
//         let ascii = 65;

//         for (let j = 1; j <= i; j++) {
//             process.stdout.write(String.fromCharCode(ascii) + " ");
//             ascii++;
//         }
//         console.log("");
//     }

//     rl.close();
// });


// Inverted triangle

// rl.question("Number:", (num) => { // 5
//     for (let i = 1; i <= num; i++) { // i = 2
//         for (let j = i; j <= num; j++) {// j = 2
//             process.stdout.write("* "); // * * * * *
//         }
//         console.log("");
//     }
//     process.exit();
// });


// NEXT QUESTION
//  _ _ *
//  _ * *
//  * * *    if n= 3

// rl.question("Enter a number:", (num) => {

//     for (let i = 1; i <= num; i++) {
//         for (let j = i; j < num; j++) {
//             process.stdout.write("_ ");
//         }
//         for (let k = 1; k <= i; k++) {
//             process.stdout.write(" *");
//         }
//         console.log(" ");
//     }
//     rl.close();
// });


// Next Question--> Create X in pattern programming
// rl.question("Enter a number:", (num) => {
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= num; j++) {// j =5 , i =1
//             if (i == j || i + j == +num + 1) process.stdout.write("*");
//             else process.stdout.write(" ");
//         }
//         console.log("");
//     }
//     rl.close();
// });



// NEXT QUESTION---> V Pattern
rl.question("Enter a number?", ((num) => {
    num = Number(num);
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= (num * 2); j++) {
            if (i === j || i + j == (num * 2 - 1)) {
                process.stdout.write("*");
            } else process.stdout.write(" ");
        }

        console.log("");
    }

    rl.close();
}));