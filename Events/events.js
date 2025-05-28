//handing button
let btn1 = document.querySelector("#btn1");

btn1.onClick = () => {
  console.log("Button clicked");
  let count = 0;
  console.log("Button was clicked " + count + " times");
};

//handling div element with box classname
let divBox = document.querySelector(".box");
divBox.onmouseover = () => {
  console.log("Mouse is over the box");
};
//use of the concept of event object syntax is
/**
 *
 * node.event=(e)=>{
 * //handle the event over here
 * }
 *
 *
 */
divBox.onmouseout = (e) => {
  console.log("Mouse is out of the box");
  console.log("Event type: " + e.type);
  console.log("Target element: " + e.target);
};

//use of the concept of event listener like addEventListeer(event,callback ) also removeEventListener(event,callback)
// let btn2 = DocumentFragment.createElement("button");
// btn2.id = "btn2";
// btn2.textContent = "Click btn2";
// document.body.appendChild(btn2);
// btn2.addEventListener("click", (e) => {
//   console.log("Button 2 clicked");
//   console.log("Event type: " + e.type);
//   console.log("Target element: " + e.target);
// });

//create a toggle button that change ths screent to dark mode when clicked and light mode when clicked again
//switching betwwen events is toggling
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light"; // initial mode

modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else {
    currentMode = "light";
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
  console.log("Current mode: " + currentMode);
});
