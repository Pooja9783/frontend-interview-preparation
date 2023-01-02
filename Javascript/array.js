//map
//map methods creats a new array with the result of calling a function for every array element....
let arr = [1, 2, 3, 4, 5];
// arr.map((e) => console.log("map array", e * 2));

//filter
//filter() method creates a new array filled with all elements that pass a test provided by a function.
//The filter() method does not change the original array.

//~~~~~~~~even number by filter~~~~~~~~~~~~~~~~~
arr.filter((e) => {
  if (e % 2 == 0) {
    // console.log("filter array", e);
  }
});

//find
//find() methods returns the value of the first array element that satisfies  the provided test function.
const ages = [3, 10, 18, 10, 20, 22, 24];
function checkAge(age) {
  return age > 18;
}
let age = ages.find(checkAge);
console.log("find arr", age);
