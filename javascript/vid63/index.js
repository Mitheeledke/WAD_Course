console.log("heoolo Vid 63 Arrays");
//Arrays are can store multiple value with diffrennt data types
let arr = [23,"Mitheel",34,3.5,0.11,233232332333233];
console.log(arr.length);
console.log(arr);
console.log(arr[0]);
arr[0] = 344
console.log(arr);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log(typeof arr);
console.log(arr.toString());
console.log(arr.join(" and ")); // it adds the argument bteween every element in the arr
console.log(arr.pop());// pop out the last element from the arr
console.log(arr);
arr.push("Yeah you can push");
console.log(arr);
console.log(arr.shift()); // pops the first element form the list
console.log(arr.unshift("Adding at starting"));
console.log(arr);
console.log(delete arr[arr.length-1]);
 // it not pop the element but make element as empty item in list but memory id declared as undefined
console.log(arr[arr.length-1]);
let a1 = [1,2,3,4];
let a2 = [5,6,7,8];
let a3 = []
a3.concat(a1,a2);
console.log(a1, a2, a3.concat(a1,a2));
console.log(a1, a2, a3);
console.log(arr.sort());
// also arr.sort(has the some compare function which sorts based on that fuctio logic)
let = nu = [1,2,3,4,5];
console.log(nu.splice(1,2));
console.log(nu.splice(1,2,34,56)); 
// here it automatically detects and changes the two numbers based on new values and its indexs 1,2 indexes and 34 56 are numbers
console.log(nu);
nu.push(23,12,45);
console.log(nu);

console.log(nu.slice(2,5));

let arr1 = [1,34,56,23,78,2,5,56,3,3];
// for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     console.log(element);
// }
// arr1.forEach((val, ind, arr) => {
//     console.log(val, ind, arr);
// });

// for (const key of arr1) {
//     console.log(key);
// }

// Map Function
let c = [1,23,5,7,11];

// let new_arr = [];
// for(let i=0; i<c.length; i++){
//     new_arr.push(c[i]*2);
// }
// console.log(c);
// console.log(new_arr);


// Map function
let new_arr = c.map((e) =>{ // c.map((elem, index, arr))
    return e*2;
})
console.log(new_arr);
console.log(c);

const greaterthanseven = (e) =>{
    if(e>7){
        return true;
    }
    return false;
}
// return the only elments which are gretaer tha seven
console.log(c.filter(greaterthanseven));
//or
console.log(c.filter((e) =>{
    if(e>7){
        return true;
    }
    return false;
}));


let arr3 = [1,2,3,4,5];
const add = (a,b) => {
    return a*b;
}
console.log("The reduced value id: "+ arr3.reduce(add));
// this is used reduce two a, b and appy each a has the value of each last operation with b new elemnt from arr3

let str = "Mitheeeeeeeel";
let arr_new = Array.from(str);
console.log(arr_new);


