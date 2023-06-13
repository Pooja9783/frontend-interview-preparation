//-------An object convert into an array---------------
const person = {
    name : "Pooja",
    age : 25
}

//output : [['name', 'Pooja'], ['age', '25']];

//built-in method
// console.log(Object.entries(person));

//without built in methoud
const getObjectEnteries = (obj) => {
const objKeys = Object.keys(obj)
// console.log(objKeys);
let res = objKeys.map((k)=>{
    const val = obj[k]
    return [k, val]
});
console.log(res);
}
getObjectEnteries(person);