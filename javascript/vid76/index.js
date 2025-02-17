// async function getData(){       //asyn function run in background upto that next statements will run
//     //assume simulating the fuctio to get data from the server
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(data);
    return data;
    // .then(response => response.json())
    // .then(json => console.log(json))
}

async function main() {   

    console.log("Loading Modues");

    console.log("Do Something else");

    console.log("Data is Loading.. please wait");

    let data = await getData(); //to use await the function should be called under the async function only

    console.log(data);
    console.log("Process data");

    console.log("Task 2");
}
main()


// data.then((v)=>{
//     console.log("Data");
//     console.log("Process data");

//     console.log("Task 2");
// })
