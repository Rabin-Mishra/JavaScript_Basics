const Product={
    productName:'Parker Jotter Standard Ballpoint Pen',
    rating:4.5,
    isDealOfTheDay:true,
    price:299
};
console.log(Product);

const profile={
    fullName:'Rabin Mishra',
    isFollowed:true,
    posts:123,
    followers:1000,
    following:500,
    desctription:'A passionate software developer and tech enthusiast.',
    profilePicture:'https://example.com/profile.jpg',
    socialLinks:{
        twitter:'https://twitter.com/rabinmishra',
        linkedin:'https://linkedin.com/in/rabinmishra',
    }
};
console.log(profile);
console.log(profile.fullName);
console.log(typeof profile["fullName"]);

//get user a input a number using propmt("Enter a number: "); .Check if the number is multiple of 5 or not.
/**
 const userInput=prompt("Enter a number");
if(userInput%5===0){
    console.log(userInput,"The number is a multiple of 5.");
}else{
    console.log(userInput,"The number is not a multiple of 5.");
}
 */

//code that can give students grades according to their scores
/**
 let score=prompt("Enter your score (0-100): ");
if(score>=80 && score<=100){
    console.log("Grade: A", score);
}else if(score>=70 && score<79){
    console.log("Grade: B", score);
}else if(score>=60 && score<69){
    console.log("Grade:C", score);
}else if(score>=50 && score<59){
    console.log("Grade:D", score);
}else{
    console.log("Grade:F", score);}
 */





    //use of for-of loop in js which is used to iterate strings and arrays and not the objects
let str="Cosmos College";
let size=0;
for(let val of str){
    console.log("Values of val=",val);
    size++;
}
console.log("Size of the string is",size);

//for-in loop in js which is used to iterate objects
let student={
    name:"Rabin Mishra",
    age:22,
    course:"BEIT",
    university:"Cosmos College of Management and Technology",
    isGraduated:false
};

for (let key in student){
    console.log("Key:",key ," Value:",student[key]);
}


//printing all the even numbers from 0 to 100 using for loop
for(let i=0;i<=100;i++){
    if(i%2===0){
        console.log("Even number:",i);          
    }
}

//create a game where you start with any randon game number ask the user to keep guessing the game number until user enters correct value
//let gameNum=Math.floor(Math.random());
/*
let gameNum=25;
let userGuess=prompt("Guess the game number (between 1 and 100): ");
while(userGuess!=gameNum){
    if(userGuess<gameNum){
        console.log("Too low! Try again.");
    }else if(userGuess>gameNum){
        console.log("Too high! Try again.");
    }else{
    userGuess=prompt("Guess the game number (between 1 and 100): ");
}}
console.log("Congratulations! You've guessed the correct number:", gameNum);
*/



//use of the concept of template literral in js use of `` where we can embed variables and expressions and the syntax is `string text ${expression} string text` and this concept is called as string interpolation
let obj={
    nameObj:"Pen",
    priceObj:100,
}
let output=`The name of the object is ${obj.nameObj} and the price is ${obj.priceObj}`;
console.log(output);

//use of the concept of string 
//Prompt the user ro enter their full .Generate a username for them based on the input start username with @ ,followed by their full name and ending witha  fullname length 
/**
let fullName=prompt("Enter your full name: ");
let username=`@${fullName.toLowerCase().replace(/\s+/g, '')} ${fullName.length}`;
console.log(username);
 */



//use of the concept of array which are immutable in nature and basically the use of for and for of loop is preferred in js
let heroes=["Ironman","Captain America","Thor","Hulk","Black Widow"];
for(let i=0;i<heroes.length;i++){
    console.log("Hero:",[i], heroes[i]);
}

//use of the concept of for of loop in js
for (let hero of heroes){
    console.log("Hero using for-of loop:", hero);
}

//practice question on arry
//for a given array with marks of students as [85,97,37,76,60] Find the average marks of  the entire class
let marks=[85,97,37,76,60];
let totalMarks=0;
for(let mark of marks){
    totalMarks+=mark;
}
let averageMarks=totalMarks/marks.length;
console.log(`The total marks of the class is ${totalMarks} and the average marks of the class is ${averageMarks}`);

//another practice question on array
//for a given array with prices of 5 items as [250,645,300,900,50] .All the items havaea an offer of 10% OFF on them .Change thge array to store the final prices after applyring the offer
let prices=[250,645,300,900,50];

for(let i=obj;i<prices.length;i++){
    console.log(`The original price of item ${i+1} is ${prices[i]}`);
    prices[i]=prices[i]-(prices[i]*0.1);

}
console.log("Final prices after applying the offer:", prices);

/*create an array to store companies => Bloomberg,MS,Uber,Goole IBM,Netflix
a==>remove first company from array
remove uber and add ola in its place 
add amazon at end of array

*/
let companies=["Bloomberg", "MS", "Uber", "Google", "IBM", "Netflix"];
console.log("Original companies array:", companies);

//remove first company from array
companies.shift();
console.log("After removing first company:", companies);

//remve Uber and add Ola in its place
let addOla=companies.splice(1,1,"Ola");
console.log(`After removing Uber and adding Ola ,the array is ${companies}`);

//adding amazon at the end of the array
companies.push("Amazon");
console.log("After adding Amazon at the end:", companies);
