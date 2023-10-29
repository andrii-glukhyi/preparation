export function isHappyNumber(n){
    let slow = n
    let fast = next(n)
    console.log(next(145))
    while(slow != fast && fast != 1) {
        console.log(slow, fast)
        slow = next(slow)
        fast = next(next(fast))
    }

    return fast === 1;
}

function next(n) {
    let sum = 0;
    while(n > 0) {
        let last = n % 10
        let temp = Math.floor(n / 10)
        sum += last * last;
        n = temp;
    }
    return sum;
}