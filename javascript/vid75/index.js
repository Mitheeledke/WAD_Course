console.log("call back and promises");

console.log("kuch be first");
console.log("kiucbh e second");
 
setTimeout(() =>{// fnction will be postpndntil complete ss coplete //this is also asynchronous function 
    console.log("Inside set time out function 1")
},2000);

console.log("The End the function is going to wait for until complete script s executed");

setInterval(() => {             //this are asynchronous function
    console.log("This is set interval every 2 sec")
},2000);

const fucnc = () =>{
    console.log("notherin g s the thing");
}

function callback(arg, fucnc){
    console.log(arg);
    fucnc();
}
const loadscript = (src, callback) =>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry ",fucnc);
    document.head.append(sc);
}

//soluion of pyraid of dom means function function funtion under... etc is promises

loadscript("https://www.google.com/search?q=mdn+short+url&rlz=1C1ONGR_enIN1064IN1064&oq=mdn+short+url&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyBwgDECEYnwUyBwgEECEYnwUyBwgFECEYnwUyBwgGECEYjwLSAQkxMTYwMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8",callback)

