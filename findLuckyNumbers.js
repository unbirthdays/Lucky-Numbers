// Write your code below this line.

function luckyNumbers(n) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
    let luckyNumber =[];
    for (let i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * arr.length);
        luckyNumber.push(arr[x]);
        arr.splice(x, 1);
    }
    return luckyNumber;
};

console.log(luckyNumbers(6));