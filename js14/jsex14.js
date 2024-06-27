function roundfor(){
    var roundfor = document.getElementById("roundfor").value;
    for(let i = 1; i<= roundfor; i++){
        // ใช้การ += เพื่อจะให้บวกตัวเดิมซ้ำไปเรื่อยๆเพื่อบวกตามที่เรากำหนด
        document.getElementById("ex14.1").innerHTML 
        += "round" + i + ": " + "i love javasc programing <br>";
    }

}
//ex14.2 forin loop
function objectforin(){
    let nameValue = document.getElementById("name").value;
    let ageValue = document.getElementById("age").value;
    let locationValue = document.getElementById("location").value;
    var obj = {name: nameValue, age: ageValue, location:locationValue};
    //วนจนจบ 3 ค่าของ obj 
    for(key in obj){
        //key แสดงค่าของname ตัวที่2 แสดงค่าของ age ตัวที่3 แสดงค่าของ location
        let value = obj[key];
        document.getElementById("ex14.2").innerHTML 
        += key + ":" + value+'<br>';
    }
} 
//ex14.3 forof loop
function objforof(){
    let data1 = document.getElementById("data1").value;
    let data2 = document.getElementById("data2").value;
    let data3 = document.getElementById("data3").value;
    var obj = [data1, data2, data3];
    //of หมายถึงว่าเอามารันทีละตัว
    for(item of obj){
        document.getElementById("ex14.3").innerHTML 
        += item + '<br>'
    }
}

//ex14.4 while loop เทียบเคียง forloop  
//ให้ i = 1 แล้วดูว่า i น้อยกว่า n มั่ยถ้าไม่รัน +1 ที่ i เอาไปเชคว่าน้อยกว่า n มั่ยจนกว่าจะมากกว่ากว่า
function roundwhile(){
    let n = document.getElementById("roundwhlie").value;
    let i = 1; //for(let i = 1; i <=n, i++)
    while(i <= n){
        document.getElementById("ex14.4").innerHTML 
        += "round" + i + ": " + "i love programming <br>";
        i++;
    }
}
//ex14.5
function checkwhile(){
    let n = document.getElementById("whileloop").value;
    let i;
    while((n<2)||(n>12)){
        document.getElementById("checkwhile").innerHTML
        = "please enter number 2-12";
        break;
    }
    if(n>=2 && n<=12){
        for(i=1; i<=12; i++){
            document.getElementById("runfor").innerHTML 
            += n + "x" + i + " = " +n*i +"<br>";
        }
    }
}
function testdowhile(){
    let i = document.getElementById("inputdonumber").value;
    let text ="";
    //ทำก่อนแล้วค่อยเชค
    do{
        text +="<br> the round number is" + i;
        i++; 
    }while(i<20);
    document.getElementById("ex14.6").innerHTML = text;
}
function testnested(){
    let loop1 = document.getElementById("loop1").value;
    let loop2 = document.getElementById("loop2").value;
    let text = "";
    let i, j;
    for(i=1; i<=loop1; i++){
        for(j=0; j<=loop2; j++){
            text +="the number is i =" + i +" and j = " + j + "<br>";
        }
    }
    document.getElementById("ex14.7").innerHTML = text;

}

//ex14.8 break statement 
function testbreak(){
    let n = document.getElementById("breaknumber").value;
    for(let i = 0; i<10; i++){
        if(i == n){
            break;
        }
        document.getElementById("ex14.8").innerHTML 
        += "the for number is " + i + "<br>";
    }
}
//ex14.9 continue statement 
function testcontinue(){
    let n = document.getElementById("continue").value;
    for(let i = 0; i<10; i++){
        if(i == n){
            continue;
        }
        document.getElementById("ex14.9").innerHTML 
        += "the for number is " + i + "<br>";
    }
}
