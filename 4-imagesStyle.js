//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops

const img= document.querySelectorAll("img");

for(let i=0;i<5;i+=2){
    img[i].style.border= "solid,blue"

}
for(let i=1;i<5;i+=2){
    img[i].style.border= "dashed,red"
}
