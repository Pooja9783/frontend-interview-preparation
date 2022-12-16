//variable
p = "Hoisting testing";
console.log(p); // will work fine

console.log(a); //a is not defined

console.log(b); // undfined
var b = 2;

console.log(c); // cannot be acess 'c' before initialized
let c = 10;

console.log(d); //cannot be acess 'd' before initialized
const d = 10;

//functions:
x(); // it will work fine
function x() {
  console.log("testing hoisting...");
}

//if we do function with variable
y(); //y is not a function
var y = function () {
  console.log(10);
};

z(); //z is not a function & ReferenceError: Cannot access 'z' before
//initialization
let z = () => {
  console.log(20);
};

t(); //t is not a function & ReferenceError: Cannot access 'z' before
// initialization
const t = () => {
  console.log(20);
};
