const conquer = (arr, first, mid, last) => {
    const temp = new Array(last - first + 1);
    let i = first, j = mid + 1, k = 0;
    while (i <= mid && j <= last) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= last) {
        temp[k++] = arr[j++];
    }
    let p = first;
    let t = 0;
    while (t < temp.length) {
        arr[p++] = temp[t++];
    }
}

const mergeSort = (arr, first, last) => {
    if (first == last) return;
    const mid = Math.floor((first + last) / 2);
    mergeSort(arr, first, mid);
    mergeSort(arr, mid + 1, last);
    conquer(arr, first, mid, last);
}

const arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);