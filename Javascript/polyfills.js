//what is polyfills ?
//A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

//--------------map polyfill-------------------

let arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

// arr.myMap((e)=> console.log(e*2))

//-----------------filter polyfill-----------------
Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// let res = arr.myFilter((e)=> (e > 4));
// console.log(res)

//-------------reduce polyfill----------------

// if (Array.prototype.reduce) {
//   Array.prototype.reduce = function (callback, initialValue) {
//     let accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//       accumulator = accumulator
//         ? callback(accumulator, this[i], i, this)
//         : this[i];
//     }
//     return accumulator;
//   };
// }

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};
let result = arr.myReduce((acc, curr) => {
  return acc + curr;
});

// console.log(result);

//---------------- forEach pollyfills ------------------
Array.prototype.myforEach = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
};
// arr.myforEach((e)=> console.log(e))

//---------------- bind pollyfills ------------------

function getName(city1, city2) {
  console.log(
    `Hi, My name is ${this.name}, I am from ${city1} and currently living in ${city2}`
  );
}
let obj = {
  name: "Pooja",
  age: 25,
};

Function.prototype.myBind = function (object, ...args1) {
  let functionCallback = this;
  return function (...args2) {
    return functionCallback.apply(object, [...args1, args2]);
  };
};

let results = getName.myBind(obj, ["Rajasthan"]);
results("Bangalore ");
