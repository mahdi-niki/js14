/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

const text = prompt("Write a sentence");

const random = Math.floor(Math.random() * 5);

const hey = "hello";

const div = document.querySelector("div");

for (let i = 0; i < text.length; i++) {
  const random = Math.floor(Math.random() * 5);
  div.innerHTML += `<span>${text[i]}</span>`;
}
const span = document.querySelectorAll("span");

for (let i = 0; i < text.length; i++) {
  const random = Math.floor(Math.random() * 5);
  span[i].style.color = colors[random];
}
