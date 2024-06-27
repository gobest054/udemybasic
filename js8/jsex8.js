let text1="hello";
let text2="my name is best";
let text3="nice to meet you 'iron man'";
document.getElementById("ex8.1").innerHTML = 
text1 +"<br>" +
text2 +"<br>" +
text3;
//8.2
let x1 = 34.00;
let x2 = 34;
let x3 = 3.14;
document.getElementById("ex8.2").innerHTML = 
x1 + "<br>" + x2 + "<br>" + x3;
//8.3
const cars = ["bmw", "benz", "porsche"];
document.getElementById("ex8.3.1").innerHTML = cars[0];
document.getElementById("ex8.3.2").innerHTML = cars[1];
document.getElementById("ex8.3.3").innerHTML = cars[2];
//8.4
const person ={
    firstnae : "suteerapat",
    lastname : "boonrat",
    age : 23,
    eyecolor : "brow"
};
document.getElementById("ex8.4").innerHTML = 
person.firstnae + " "+person.lastname+
" is "+person.age+" yo "+person.eyecolor+".";
//8.5
document.getElementById("ex8.5").innerHTML =
typeof "javascript" + "<br>" +
typeof 3.14 + "<br>"+
typeof(3.14);
//8.6
let var1 = "bmw"+"x"+(3+4);
let var2;
let var3 = "";
document.getElementById("ex8.6.1").innerHTML = var1;
document.getElementById("ex8.6.2").innerHTML = 
var2 + "<br>" + typeof var2;
document.getElementById("ex8.6.3").innerHTML = 
"var3 is " + var3 + "<br>" + typeof var3;
let var4 ="lamborghini"
document.getElementById("ex8.6.4").innerHTML =
"var4 is " + var4 + "<br>" + typeof var4;