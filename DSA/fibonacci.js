//fibonacci series : that generate subsequence series of numbers by addition
// two previous numbers.

let n = 3;
let fib = [0, 1];
for (let i = 2; i < n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

let previousNum = 0;
let nextNum = 1;
let fibSeries = [0, 1];
for (let i = 1; i < n; i++) {
let temp = previousNum + nextNum; 
  previousNum = nextNum;
  nextNum = temp;  
  fibSeries.push(temp); 
}
console.log(fibSeries);
