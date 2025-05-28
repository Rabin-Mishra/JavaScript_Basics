//create a function using the function keyword that takes strings as and argument andn returns the number of vowels in the string

function countVowels(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(
  `The number of vowels in the string is: ${countVowels("Hello World")}`
); // Example usage

//performing the same task using an arrow function
const vowelCount = (str) => {
  let countVowel = 0;
  for (let char of str.toLowerCase()) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      countVowel++;
    }
  }
  return countVowel;
};
console.log(
  `The number of vowels in the string is: ${vowelCount(
    "A quick brown fox jumps over the lazy dog"
  )}`
); // Example usage

//use of forEach loop in an arry in js is quite interesting
//syntax of forEach loop is array.forEach(callbackFunction))
//3 parameters are passed to the callback function: currentValue => the vlaue of the item , index ==> position of an array item, array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});
//for each loop can only be usedo on arrays and not on stings or objects
numbers.forEach((num, idx, numbers) => {
  console.log(`The number at index ${idx} is ${num} in the array ${numbers}`);
});

//for a givena array of numbers print the square of each value using the forEach loop
const arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
  console.log(`The square of ${num} is ${num * num}`);
  //or use the conncept as console.log(num**2);
});

//use of the concept of map in js
let newArr = arr.map((val) => {
  return val ** 2;
});
console.log(`The new array with square is ${newArr}`);

//use of the concept of filter() fucntion in js
let numerfilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenFilter = numerfilter.filter((num) => {
  return num % 2 === 0;
});
console.log(`The even number in the array are ${evenFilter}`);

//use of the concept of reduce() function in js
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr1.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(`The sum of the array is ${sum}`);

//use of the reduce to find the max value in an array
let maxValue = arr1.reduce((previousValue, currentValue) => {
  return previousValue > currentValue ? previousValue : currentValue;
});
console.log(`The max value in the array is ${maxValue}`);

//practice
//we are given an array of marks of students ,filter out the marks of students that scored 90+
let marks = [85, 92, 78, 90, 95, 88, 76, 100];
let ninetyPlus = marks.filter((mark) => {
  return mark >= 90;
});
console.log(`The marks of students that scored 90+ are ${ninetyPlus}`);

//take a number n as input from user .create an array of numbers from 1 to n .use reduce method to calcualate sum of numbers in the array.use reduce method to calculate the product of numbers in the array.
let n = parseInt(prompt("Enter a number:"));
let arr2 = [];

for (let i = 1; i <= n; i++) {
  arr2[i - 1] = i; //meaniing 1(0),2(1),3(2) and so on
}
console.log(`The array is ${arr2}`);
let sumNum = arr2.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(`The sum of numbers in the array is ${sumNum}`);
let productNum = arr2.reduce((previousValue, currentValue) => {
  return previousValue * currentValue;
});
console.log(`The product of numbers in the array is ${productNum}`);
