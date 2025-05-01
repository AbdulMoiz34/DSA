// Binary Search Algorithm
// Binary search is used to find an element in an array quickly and efficiently, 
// but the key requirement is that the array must be sorted.

const arr = [1, 5, 6, 9, 45, 78, 108, 130, 560];
const target = 5;
const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
        console.log("run");
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else if (arr[mid] > target) end = mid - 1;
    }

    return -1;
}

console.log(binarySearch(arr, target, 0, arr.length - 1));