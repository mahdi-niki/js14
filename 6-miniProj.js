//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red

const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

const h1 = document.querySelector("h1");

setInterval(() => {
  const random = Math.floor(Math.random() * 5);
  h1.style.color = colors[random];
}, 1000);

const li=document.querySelectorAll("li")


const [green,yellow,...red]=li
green.style.backgroundColor="green"
yellow.style.backgroundColor="yellow"
red.map(li=>li.style.backgroundColor="red")
