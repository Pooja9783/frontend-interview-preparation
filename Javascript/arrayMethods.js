const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Foreach
//forEach takes a callback function and run that callback function
//on each element of array one by one.
arr.forEach((element, i) => {
  // console.log(i, element);
});


//Filter
//Filter method create a new array filled with elements that pass a test provided by a function
//Filter method does not execute the function for empty elements.
//Filter method does not change orianal array. 
arr.filter((e, i)=>{
  if(e > 5){
    console.log(i, e);
  }
})
