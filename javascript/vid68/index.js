console.log("Hello brotherss..")

let boxes = document.getElementsByClassName("box");
console.log(boxes);
// boxes[2].style.backgroundColor = "red";
// let idbe = document.getElementById("red").style.backgroundColor = "red";
// document.querySelector(".box").style.backgroundColor = "Green";

// document.querySelectorAll(".box").style.backgroundColor = "Green"; //not work because it not have .style object in it
// console.log(document.querySelectorAll(".box"));

// document.querySelectorAll(".box").forEach(e =>{ // need to iterate ove list and make every object as you disire
//     e.style.backgroundColor = "Green";  
// })

// console.log(document.getElementsByTagName("div"));

// document.getElementsByName();

e = document.getElementsByTagName("div");
console.log(e[3].matches("#red")) //checks for id named as red return true else false it used ot check css attributes
//e[i] where i is 1based indexing

// closest to look for the nearest anchesters for given css
console.log(e[3].closest(".container"))
console.log(e[3].closest(".box"))
console.log(e[3].closest("html"))


console.log(document.querySelector(".container").contains(e[0]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));