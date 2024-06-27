function checknumber(){
    var input1 = document.getElementById("input1").value;
    if(input1 >= 30){
        document.getElementById("ex13.1.1").innerHTML = input1 +"มากกว่า 30";
    }
    else{
    
        document.getElementById("ex13.1.1").innerHTML = input1 +"น้อยกว่า 30";
    }
}
//ex13.2 if else statements
function covert(degree){
    if(degree == 'c'){
        var celsius = document.getElementById("celsius").value;
        var falen_result = (celsius * (9/5))+32;
        document.getElementById("falen").value = Math.round(falen_result)
    } 
    else{
        var falen = document.getElementById("falen").value;
        var celsius_result = (falen - 32)*5/9;
        document.getElementById("celsius").value 
        = Math.round(celsius_result);
    }
}

function grade(){
    var score1 =document.getElementById("score").value;
    //&& คือ2 ฝั่งต้องเป็นจริงทั้งคู่
    if(score1 >= 80 && score1<=100){
        document.getElementById("ex13.3").innerHTML = "A";
    }
    else if(score1 >= 70 && score1<=79){
        document.getElementById("ex13.3").innerHTML = "B";
    } 
    else if(score1 >= 60 && score1<=69){
        document.getElementById("ex13.3").innerHTML = "C";
    }
    else if(score1 >= 50 && score1<=59){
        document.getElementById("ex13.3").innerHTML = "D";
    }
    else if(score1 >= 0 && score1<=49){
        document.getElementById("ex13.3").innerHTML = "F";
    }
    else{
        document.getElementById("ex13.3").innerHTML = "please enter 0-100";  
    }
}

//ex13.4 nested if statements
function scoreranges()
{
    let score2 = document.getElementById("score2").value;
    if(score2 < 60)
    {
        if(score2 < 30){
            document.getElementById("result").value = "let than 30";
        }
        else{
            document.getElementById("result").value = "between 30 and 59";
         }    
    }
    else{
        if(score2 > 80){
            document.getElementById("result").value = "more than 80";
        }
        else{
            document.getElementById("result").value = "between 60 and 80";
        }
    }
}

//ex13.5 switch statements
function grsdestatus(){
    let grade1 = document.getElementById("score3").value;
    switch(grade1){
        case 'A':
            document.getElementById("ex13.5").innerHTML = "goodjob";
            break;
        case 'B':
            document.getElementById("ex13.5").innerHTML = "good";
            break;
        case 'C':
            document.getElementById("ex13.5").innerHTML = "pass";
            break;
        case 'D':
            document.getElementById("ex13.5").innerHTML = "figthing";
            break;
        case 'F':
            document.getElementById("ex13.5").innerHTML = "not pass";
            break;
        default:
            document.getElementById("ex13.5").innerHTML = "enter A,B,C,D,F";
            break;
    }
}