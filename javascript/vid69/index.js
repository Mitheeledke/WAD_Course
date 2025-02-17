let a = 6;
function facto(number){
    let arr = Array.from(Array(number+1).keys());
    console.log(arr.slice(1,));
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    return c;
}

// using normal function
function factori(nu){
    let ind = 1;
    for(let i=1; i<=nu; i++){
        ind  = ind*i;
    }
    return ind;
}
console.log(facto(a));
console.log(factori(a));