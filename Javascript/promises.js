//----------Promises------------------

//producing promise
let promise = new Promise((res, rej) => {
  res("Resolved Promise...");
  rej("Rejected Promise...");
});

//consuming promises
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//Promise all
let promiseAllOne = new Promise((res, rej) => {
  rej("promise one rejected");
});

let promiseAllTwo = new Promise((res, rej) => {
  rej("promise two resolved");
});

let promiseAllThree = new Promise((res, rej) => {
  res("promise three resolved ");
});

Promise.any([promiseAllOne, promiseAllTwo, promiseAllThree])
  .then((e) => console.log(e))
  .catch((err) => console.log(err));

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

Promise.all([promise1, promise2])
  .then((res) => console.log(res)) // this console print 3 then 2
  //because in
  .catch((err) => console.log(err));
