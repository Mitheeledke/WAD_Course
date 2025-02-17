// Calculate Factorial... if number is 5 then fact is 5*4*3*2*1 = 120 or display 120 using reduce and for loops

//using reduce
n = Math.random()*10;
n = Math.floor(n);
console.log("n = "+n);

if(n<0){
    console.log("error number should be more than 0");
}
let ans = Array.from({length:n},(_, index) => index+1).reduce((acc,val)=> acc*val,1);
console.log(`${ans} is the factorial of the ${n} numeber`);
// const fact = (n) =>{
//     return n*n-1;
// }
// let curr = n;
// console.log(n.reduce((n,curr) =>{ //Not working
//     return curr*n-1;
// }));




//using for loop
const facto = (n)=>{
    let curr = 1;
    if(n ==0 || n ==1){
        return 1;
    }
    else {
        for(let i=n; i>0;i--){
            curr *=i;
        }
    }
    return curr;
}
console.log(`the factorial of n is: ${facto(n)}`);



