//use of the concept of dom manipulation always go on using the concept of querySelector
let elements = document.querySelector("p");
console.log(elements); // returns the first p element in the document
console.dir(elements); // prints the properties of the element
//to access id use #id_name and for the class  use .class_name
let eleAll = document.querySelectorAll("p");
console.dir(eleAll); // prints the properties of all p elements in the document as a node list and its all the individual elements in dom tree
/*properties for the dom manipulation includes the following as :tagName==>returns the tag name of the element
innertext==>returns the text content of the element and all its children
innerHTML==>returns the html content of the element and all its children
textContent==>returns the text content of the element and all its children, but does not include the html tags even for the hidden eleements
*/

/**  In dom we have 3 nodes as text node,comment node and element node which is the  most used node in our case
 *     / */

let childP = document.querySelector("div").children;
console.log(childP); // returns the children of the div element as a HTMLCollection

//practice question
//create a he headin element with text as Hello js .append learning js to this text string
let heading2 = document.querySelector("h2");
heading2.innerText += "\tlearing js";
console.log(heading2); // prints the heading element with the text as Hello js learning js

///accesing the div tag with class name as box
let accessClass = document.querySelectorAll(".box");
console.log(accessClass); // prints
console.dir(accessClass); // prints the properties of the element with class name as box
console.log(accessClass.innerText);
accessClass.innerHTML;
accessClass.tagname;
accessClass.textContent; // changes the text content of the element with class name as box

//for the further manipulation use the concepts of getAttribute and setAttribute and its syntax is as follows
/**
 * getAttribute("attribute_name") ==> returns the value of the attribute
 * setAttribute("attribute_name", "value") ==> sets the value of the attribute
 * removeAttribute("attribute_name") ==> removes the attribute from the element
 *
 *
 * also can use the concept of node.style to change the style of the element
 */

/*
fo insert elemets:
1st create the element and then insert and append what needs to be maniipulated
let el = document.createElement("p"); // creates a new p element
1.node.append(el)==> appends the element to the end of the node
2.node.prepend(el)==> prepends the element to the beginning of the node
3.node.before(el)==> inserts the element before the node
4.node.after(el)==> inserts the element after the node
5.node.replaceWith(el)==> replaces the node with the element
6.node.remove() ==> removes the node from the document
7.node.cloneNode(true) ==> clones the node and its children, if true is passed then it clones all the children as well
*/

/* 
for deleting elements:  
1.node.remove() ==> removes the node from the document
2.node.removeChild(child) ==> removes the child from the node
3.node.replaceChild(newChild, oldChild) ==> replaces the old child with the new child
4.node.innerHTML = "" ==> removes all the children of the node
5.node.textContent = "" ==> removes all the text content of the node
6.node.innerText = "" ==> removes all the text content of the node and its children

*/

//perform all the above comments
let newP = document.createElement("p");
newP.innerText = "This is a new paragraph";
let div = document.querySelector("div");
div.append(newP); // appends the new paragraph to the end of the div
div.prepend(newP); // prepends the new paragraph to the beginning of the div
div.before(newP); // inserts the new paragraph before the div

div.after(newP); // inserts the new paragraph after the div
div.replaceWith(newP);

//createa a new button element give it a text of click me bg color as read and text color as white insert the button as first element in th body tag
let newButton = document.createElement("button");
newButton.innerText = "Click me";
newButton.style.backgroundColor = "red";
newButton.style.textColor = "white";
document.body.prepend(newButton); // prepends the new button to the beginning of the body
//remove the button from the body


