//fetch API
//uses Request and Response objects
//the fetch() method is used to fetch a resource (data)
//syntax:: let promise =fetch(url,[options])

const URL = "https://cat-fact.herokuapp.com";
const factPara = document.querySelector("#catPara");
const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);
let data;
//if no options sent with fetch it automatically sends a GET Request
const getFacts = async () => {
  console.log("Getting data.....");
  let response = await fetch(URL);
  console.log(response);
  data = await response.json();
  factPara.innerText = data[0].text;
};
btn.addEventListener("click", getFacts);

//terms
/**
 * AJAX=> asynnchronous js and xml
 * JSON=> is Js Object Notation
 *
 * json() method: returns a second promise tha resolves with the result of parsing the response body text as JSON
 * which means Input is JSON and output is JS Object
 */


//request and response
// http verbs and response status code 

//sending post request
