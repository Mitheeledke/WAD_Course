console.log ("varibales can be declared var, let , const");
// var is glbally scoped and let is not globally scoped 
// var a = 5;
let a = 5;
var b = 7;
console.log(a+b);
console.log(a+b+8);
console.log(typeof(a));
var b = "THsi si string";
// var 55a = 243;// not allowed to start with number
{
    let a = 66;
    console.log(a); // a = 66
}
console.log(a);// a = 5
//globally not changed a value only changed in the scope
console.log(typeof b, typeof a);
// const a = 1;
// a = a+1; //gives an error
//write 7 types of dataypes inhere and print or console.log all the typeOf()

//type of null is object
//type(a)
//object can has man type of data and object can have object itself in it or function in it
let o ={
    "name": "mitheel",
    "job role": "developer",
    "id": 123
}
// console.log(o);
o.salary = 10000000;
console.log(o);
// console.log(o["name"]);

