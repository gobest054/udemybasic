var radius = 8;
document.getElementById("ex12.1").innerHTML 
= "radius = 8 <br> pi" + Math.PI+ "<br> circle Area =" 
+ Math.PI*Math.pow(radius,2);

function circle(){
var radius = document.getElementById("radius2").value;
var result = Math.PI*Math.pow(radius,2);
if(!isNaN(result)){
    document.getElementById("tocel").value = result;
    }
}

function mathfuction(){
    var number = document.getElementById("number_input").value;
    var sqrt_result = Math.sqrt(number);
    var round_result = Math.round(sqrt_result);
    var ceil_result = Math.ceil(sqrt_result);
    var floor_result = Math.floor(sqrt_result);
    if(!isNaN(sqrt_result)){
        document.getElementById("math_sqrt").value = sqrt_result;
    }
    if(!isNaN(round_result)){
        document.getElementById("math_round").value = round_result;
    }
    if(!isNaN(ceil_result)){
        document.getElementById("math_ceil").value = ceil_result;
    }
    if(!isNaN(floor_result)){
        document.getElementById("math_floor").value = floor_result;
}
}

//ex12.4 Math.abs(), Math.sin(), Math.cos(), Math.min(), Math.max()
document.getElementById("ex12.4.1").innerHTML = Math.abs(-8,8);
document.getElementById("ex12.4.2").innerHTML = Math.sin(90 * Math.PI/180);
document.getElementById("ex12.4.3").innerHTML = Math.cos(30 * Math.PI/180);
document.getElementById("ex12.4.4").innerHTML = Math.min(30, 60, 80, 190, -300, -40);
document.getElementById("ex12.4.5").innerHTML = Math.max(30, 60, 80, 190, -300, -40);

//ex12.5math random function
function getrandom(){
    document.getElementById("ex12.5").innerHTML = Math.random();
}
function getrandom100(){
    document.getElementById("ex12.5.1").innerHTML 
    = Math.floor(Math.random()*101); //0-100 => total 101 number
}

function getrandom1(){
    document.getElementById("ex12.5.2").innerHTML 
    = Math.floor(Math.random()*101)+1; //1-100 => +1
}
function getrandom1(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
