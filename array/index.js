// Array definition
// Array is a linear data structure to store the multiple values in a Contiguous manner.
// Linear means one after one-->> box-->box--->box
// Contiguous means same address

// Find the maximum number from an array.
// const arr = [34, 23, 9, 12, 45, 98, 12];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) max = arr[i];
// }

// console.log(max);

// Find the second largest number from the array.
// const arr = [34, 23, 9, 12, 45, 98, 12 , 61 , 98];

// let largest = Math.max(arr[0], arr[1]);
// let secondLargest = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] <largest) {
//         secondLargest = arr[i];
//     }
// }

// console.log("Largest No:" + largest);
// console.log("Second largest No:" + secondLargest);

// Reverse the array
// const arr = [1, 2, 3, 4, 56, 62];

// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++, j--;
// }

// console.log(arr);

// find the minimum number from an array
// const arr = [1, 2, 3, 4, 56, 62, -4, -12];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log(min);

// Find the second minium number from an array
// const arr = [1, 2, 3, 4, 56, 62, -4, -12, -12];

// let min = Math.min(arr[0], arr[1]);
// let sMin = Math.max(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] < min) {
//         sMin = min;
//         min = arr[i];
//     } else if (arr[i] < sMin && arr[i] !== min) sMin = arr[i];
// }


// console.log(`Second Minimum No: is ${sMin}`);


// const arr = [0, 1, 1, 0, 0, 1, 1, 0, 1];
// let j = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
// }

// console.log(arr);

// negative numbers should be in the left side and positive should be in the right side.
// const arr = [1, -2, -4, -9, 45, 68, 8274];
// let i = 0;
// let j = 0;

// while (i < arr.length) {
//     if (arr[i] < 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }

// console.log(arr);

// rotate elements from left 1
// const arr = [1, 2, 3, 4, 5];

// let temp = arr[0];

// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }

// arr[arr.length - 1] = temp;

// console.log(arr);


// Right rotation (1)
// const arr = [1, 2, 3, 4, 5];
// const copy = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }

// arr[0] = copy;
// console.log(arr);

// left rotation (k)
// const arr = [1, 2, 3, 4, 5];
// const k = 1

// const temp = new Array(arr.length);

// for (let i = arr.length - 1; i >= 0; i--) {
//     temp[i] = arr[(i + k) % arr.length];
// }

// console.log(temp);


// const arr = [1, 2, 3, 4, 5];
// let k = 2;

// k = k % arr.length;

// const reverse = (i, j) => {
//     while (i <= j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--
//     }
// }

// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);
// console.log(arr);