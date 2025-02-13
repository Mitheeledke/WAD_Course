console.log("HEllo vid 59 Faulty Calculator");

// it takes two number from user as input 
// it performs wrong operation on as:
// + ---> -
// * ---> +
// - ---> /
// / ---> **
// it performs wrong operation 10% of times using random number
// a = Math.random();

function isFaulty() {
    return Math.random() < 0.3;
}

// Functions for operations
function add() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    
    document.getElementById('result').innerHTML = isFaulty() ? num1 - num2 : num1 + num2;
}

function sub() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    document.getElementById('result').innerHTML = isFaulty() ? num1 / num2 : num1 - num2;
}

function mul() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    document.getElementById('result').innerHTML = isFaulty() ? num1 + num2 : num1 * num2;
}

function div() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    document.getElementById('result').innerHTML = isFaulty() ? num1 ** num2 : num1 / num2;
}
