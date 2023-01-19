//Prime Number: if a number divisible by itself and 1 called a prime number
//ex: 2,3,5,7,11,13,17
let primeNumber = 11;

function isPrime(){
    if(primeNumber < 2){
        return 'This is not a prime number'
    }

    for(let i = 2; i<primeNumber; i++){
        if(primeNumber%2 === 0){
            return 'This is not a prime number'
        }
        else {
            return 'This is a prime number'

        }
    }
}
console.log(isPrime());