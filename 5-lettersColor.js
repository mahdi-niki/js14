/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

const text = prompt("Write a sentence");

const div = document.querySelector("div");
div.innerText =text
div.style.color="blue"
console.log(div.innerHTML)


