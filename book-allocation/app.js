const arr = [12, 34, 67, 90], k = 2;

const isValid = (arr, mid, k) => {
    let numberOfStudent = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + sum > mid) {
            numberOfStudent++;
            sum = arr[i];
            if (numberOfStudent > k) return false;
        } else sum += arr[i];
    }

    return true;
}

const minimizeTheMaximum = (arr, k) => {
    if (k > arr.length) return -1;
    let first = 0;
    let last = 0;
    for (let i = 0; i < arr.length; i++) {
        first = Math.max(first, arr[i]);
        last += arr[i];
    }

    let ans = -1;
    while (first <= last) {
        const mid = Math.floor((first + last) / 2);
        if (isValid(arr, mid, k)) {
            ans = mid;
            last = mid - 1;
        } else first = mid + 1;
    }

    return ans;
}

console.log(minimizeTheMaximum(arr, k));