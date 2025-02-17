console.log("The promises concept wait 3sec");



let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("NO this random no is not supproted");
    }
    else{
        setTimeout(() =>{
            console.log("yes thi sis under setTimut");
            resolve("Mitheel");
        },3000);
    }
})


let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("NO this random no is not supproted 2");
    }
    else{
        setTimeout(() =>{
            console.log("yes thi sis under setTimut2");
            resolve("Mitheel 2");
        },1000);
    }
})
// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let p3 = Promise.all[prom1,prom2]; //Promise.allsettled(), Promise.race(), Promises.any(), Promise.resolve(), Promise.reject()
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
});