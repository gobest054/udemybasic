function myhello(){
    document.getElementById("ex10.1").innerHTML ="hello java script";

}

function mywelcom(name, job){
    document.getElementById("ex10.2").innerHTML 
    = "welcom " + name + " ,the " + job +".";
}

function mytext(text){
    document.getElementById("ex10.3").innerHTML = text;
}
//ให้ ตัวแปล areaเป็นmyarea(6,8)
var area = myarea(6,8);
document.getElementById("ex10.4").innerHTML = area;
//กำหนดฟังชั่น โดยให้เอาค่ามาคูณกันแล้วรีเทินค่ากลับใมาให้ตัวที่เรียกใช้งาน
function myarea(width, length){
    return width*length;
}

document.getElementById("ex10.5").innerHTML = calcius(189);
function calcius(falen){
    return (5/9)*(falen-32);
}
// 10.6 การรับค่าจากยูสมาคำนวน
function regarea(){
    var r_w = document.getElementById('input1').value;
    var r_l = document.getElementById("input2").value;
    var result = r_w*r_l;
    //isnan แปลว่าถ้ามันไม่ว่าง ในทีนี้ถ้า result ไม่ว่างรันต่อ
    if(!isNaN(result)){
        document.getElementById("result").value = result;

    }
}
 
//10.7 input and out put and tocel function
function tocel(){
    var fah = document.getElementById('input3').value;
    var tocel = (5/9)*(fah-32)
    if(!isNaN(fah)){
        document.getElementById("tocel").value = tocel;
    }
}




