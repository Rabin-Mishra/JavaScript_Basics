// learn abour asynchronous programming abour async await which are better than promise chains and promise chains are better than callback hell
//i.e async await>>promise chains>> callback hell

//use of setTimeout(function_name ,time in ms)==>asynchronous programming basics as it runs parallely without making the code to wait for the execution
function hello() {
  console.log("Hello");
}
setTimeout(hello, 2000); //after 2s display

//using the arrow function
setTimeout(() => {
  console.log("Print after 4 seconds");
}, 4000);

//use of concept of callbcak ,callback is never passed with the parenthesis never use () this whicle pasing
//callback hell==>netsed callbacks stacked to make a pyramid of callbakc called as pyramid of doom
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("Data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 5000);
}

getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});

//the above example is a basic example of nested call back and called to be as a callback hell

//to solve this the concept of promises has been introudeced in JS
//syntax of promises: let promise=new promise((resolve,reject)=>{})==>resolve and reject are callbacks provided by a js
/**
 * Promise has 3 states as:
 * pending ,fulfilled or (resolved) and rejected states
 * to fulfill promise use -==>resolve()
 * pending==> result is undefined
 * resolved==> result is a value (fulfilled) resolve(result)
 * rejected==> result is an error object reject(error)
 */
let promise = new Promise((resolve, reject) => {
  console.log("i am a promise");
  reject("some Error");
});

//in real life we manage and maintain promises rather than creating promises

//for using the promises :
/**
 * promise.then((res)=>{}) used when promise is fulfilled
 * promise.catch((err)=>{}) used when promise is rejected
 */
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data");
      resolve("Success message");
    }, 5000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("Success message");
    }, 6000);
  });
}
console.log("Fetching data1....");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
  console.log("fetching data 2");
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
});

//chaining

//use of async and await for the best version of asynchronous programming
//syntax async function myfunc(){}==> automatically returns a promise
//await pauses the execution of its surrounding async function until the promise is settled and can only be used inside of asynce function only

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api(); //1st call
  await api(); //2nd call

  //IIFE:Immediately Invoked Function Expression  and its a function that is called as soon as its created
}
/**
(function (){
//.......})();

(()=>{
    //....
    })();

    (async ()=>{
        //.....
        })();
        immediately invoked and used only once
 */
(async () => {
  console.log("Print api 1");
  await api();
})();
