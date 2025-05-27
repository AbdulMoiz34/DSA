const arr = [3, 6, 7, 11];
const hours = 8;

const isValid = (piles, h, currentSpeed) => {
    let totalHours = 0;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] % currentSpeed == 0) {
            totalHours += piles[i] / currentSpeed;
        } else {
            totalHours += Math.ceil(piles[i] / currentSpeed);
        }
        if (totalHours > h) return false;
    }

    return true;
}


const minEatingSpeed = (piles, h) => {
    let minSpeed = 1;
    let maxSpeed = 0;
    for (let i = 0; i < piles.length; i++) {
        maxSpeed = Math.max(piles[i], maxSpeed);
    }

    let ans = -1;
    while (minSpeed <= maxSpeed) {
        const mid = Math.floor((minSpeed + maxSpeed) / 2);
        if (isValid(piles, h, mid)) {
            ans = mid;
            maxSpeed = mid - 1;
        } else minSpeed = mid + 1;
    }

    return ans;
}

const res = minEatingSpeed(arr, hours);
console.log(res);