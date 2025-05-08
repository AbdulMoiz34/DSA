const arr = [5, 2, 3, 0, 4, 1];

// Cyclic Sort is used to sort the element when the array is given from 1 to n range.
// The intuition is very simple. when the array is given to u from 1 to n range. The current Index would be (arr[i] - 1).
// for example: [1, 3, 2]=> the correct index of 2 is 1. [1, 2, 3]

const cyclicSort = (arr) => {
    let i = 0;
    while (i < arr.length) {
        const correctIdx = arr[i];// If the range is from 0 to n. The correct index will be the element.
        if (arr[i] !== arr[correctIdx]) {
            let temp = arr[i];
            arr[i] = arr[correctIdx];
            arr[correctIdx] = temp;
        } else i++;
    }
    return arr;
}

console.log(cyclicSort(arr));