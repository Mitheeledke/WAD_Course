console.log("HEllo vid 58 Functions");
function add(a,b){
    return a+b;
}
console.log(add(5,7));

//Function
function nice(name){
    console.log("Hello "+name+"Your are looking Handsome");
    console.log(`Hello ${name} Your are looking Handsome`);
    console.log("Hello",name,"Your are looking good enough");
    console.log("Hello "+name+" Your are kind");
}
nice("Mitheel");
nice("Raj");
nice("Sai");
//c is defalut value
function sub(a,b,c=5){
    return a-b;
}
console.log(sub(5,7));
console.log(sub(3,2));
console.log(sub(3,2,1));//it will ignore the default value
console.log(sub(3));// argument sub(3) is not defined so it will return NaN

//Arrow function
const funct1 = (x)=>{
    console.log("I am arrow function ",x);
}
funct1(5);
funct1(7);