console.log("Helo vid 60  String" );
let a = "Mitheel";
console.log(a);
console.log(a[0]);
for(let i =0; i< a.length;i++){
    console.log(a[i]);
}
console.log(a.length);
console.log(a[5]); 
console.log(a[6]);
console.log(a[9]);// undefined INSTED OF INDEX OUT OF Bounds
console.log("This is String name: "+a+"Tis si si concatenation of strings");
console.log(`This is String name: ${a} This is 
    concatenation of strings in using template literals `);// template literals  
console.log(a.toUpperCase());
console.log("Mithe\"el  or  "+`Mithe"el`);
console.log(a.slice(1,4));
console.log(a.replace("Mi", "12"));
console.log(a.concat(a," is a good","new "));
//String s are immutable
// trime makes string spaces free from both sides
a = "   Mitheel    ";
console.log(a.trim());