// create a business name genrator b cominning list of adjectives and shop name and another word
/*
Adjectives:
creazy
amzing 
fire

shop name:
Engine
Foods
Garments

Another WOrd:
Bros
Limited
Hub
*/

let asjs = ["crazy","Amazing","Firee"];
let shop  = ["Engine", "foods", "Garments"];
let another = ["Bros", "Limited", "Hub"];
function randa(){
    return Math.floor(Math.random()*3);
}
let bussname = `${asjs[randa()]} ${shop[randa()]} ${another[randa()]}`;
console.log(bussname);