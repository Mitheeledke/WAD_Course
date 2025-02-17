// This is Excercise usinng DOM methods

// Givn 5 boxes assigned random color and random background to each box usig Dom concepts


// /let a =document.getElementsByClassName("container");
let boxes = document.querySelector(".container").children;
function getRandomcolor(){
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomcolor();
    e.style.color  = getRandomcolor();
})
