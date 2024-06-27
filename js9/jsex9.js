//การสร้างตัวแปลที่คงที่
const person1 = {
    firstname :"javascript",
    lastname :"best",
    old :23,
    eyecolor : "brow"
};
//ใช้การกำหนดชื่อตัวแปลหลัก.ชื่อตัวแปลย่อยได้เลย(ข้อมูลภายใน) 
//เช่น ไว้ใช้ทำประวัตนักเรียน นาย a มีข้อมูลอะไรบ้าง
document.getElementById("ex9.1")
.innerHTML = person1.firstname +person1.lastname + " is "
+person1.old+" yearold " +" eyecolor "+person1.eyecolor;

const person2 ={
    firstname: "sutee",
    lastname: "boon",
    old: 23,
    eyecolor :"brow"
};
//การใช้["ชื่อตัวแปลย่อย"]ใส่ "" คร่อมชื่อตัวแปลย่อยด้วย
document.getElementById("ex9.2").innerHTML
=person2["firstname"] +person2["lastname"] + " is "
+person2["old"]+" yearold " +" eyecolor "+person2["eyecolor"];

//การกำหนดตัวแปลยperson3 และทำการใช้ตัวแปล fullperson 
// และรีเทินค่า กลับไปเก็บไว้ที่ตัวแปล fullperson 
//และเรียกใช้ person3.fullperson
const person3 ={
    firstname: "suteerapat",
    lastname: "boonrat",
    old: 23,
    eyecolor :"brow",
    fullPerson: function(){
        return this.firstname + " " + this.lastname + " is " + this.old 
        + " yearold " + this.eyecolor + " eyes ";
    }
}
document.getElementById("ex9.3").innerHTML = person3.fullPerson();