/*
  References:
  
  https://developer.mozilla.org/en-US/docs/Web/API/Node
  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
  https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  https://developer.mozilla.org/en-US/docs/Web/API/FormData
*/

// *** SELECTING DOM ELEMENTS ***
/*
// Find an element with the class "value"
console.log(document.querySelector(".value").firstChild.nodeName);
console.log(document.querySelector(".value").firstChild.nodeValue);
// Find a <button> element
console.log(document.querySelector("button").firstChild.nodeName);
console.log(document.querySelector("button").firstChild.nodeValue);

// find all buttons
const buttons = document.querySelectorAll("button");
//[...buttons] => converts to array (another way of using array methods)

// iterate over the NodeList of buttons
for (let element of buttons.values()) {
  console.log(element.firstChild.nodeValue);
}

// find all h3
const heading3List = document.querySelectorAll("h3");

// iterate over entire list
for (let element of heading3List.values()) {
  console.log(element.firstChild.nodeValue);
}

// find all divs containing ratings
const ratings = document.querySelectorAll(".rating .value");

// iterate over entire list
for (let element of ratings.values()) {
  console.log(element.firstChild.nodeValue);
}
*/


// *** UPDATING DOM ELEMENTS ***

// select all the descriptions on the page

// returns a NodeList:
const descriptions = document.querySelectorAll(".description");

for (let desc of descriptions) {
    desc.innerText = "hello world";
}

// returns a NodeList:
const ratings = document.querySelectorAll(".rating .value");

console.log(ratings);
console.log(ratings.length);
console.log(ratings.item(2).innerText);

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7){
    rating.innerText = "WOW"
  }
}

const parks = document.querySelectorAll(".park");
const numberParks = parks.length;
console.log(numberParks);

// create a new element
const newElement = document.createElement("h2");

// add the text
newElement.innerText = `${numberParks} exciting parks to visit`;

//add the class
newElement.classList.add("header-statement");

// insert the new element
const header = document.querySelector("header");
header.appendChild(newElement);

// *** FORM SUBMISSION and EVENTS ***

const main = () => {
  // get the form element
  const form = document.querySelector("#parkForm");

  // attach the submit handler function when form is submitted
  form.addEventListener("submit", submitHandler);
};

const submitHandler = (event) => {
  // prevents form submission
  event.preventDefault();

  const form = document.querySelector("#parkForm");
  const formData = new FormData(form);
 
  formData.forEach((value, key) => {
    console.log(key, value);
  });
  
}

// run function "main" once DOM has been loaded
window.addEventListener("DOMContentLoaded", main);

