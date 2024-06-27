//ex11.1 strings double quotes and single
var heroname1 = "ironman";
var heroname2 = "hulk";
document.getElementById("ex11.1").innerHTML 
= "i like "+ heroname1 + ' and ' + heroname2 +".";

//ex11.2 strings using backslast
var question = "what\'s your name?";
var answer = "you can call me\"N.best\", and you?";
let respon = "javascript\
 manpower"
document.getElementById("ex11.2").innerHTML 
= question + answer+ respon+ " .";

//ex11.3 strings methods

let lorem = "Lorem ipsum, dolor sit amet ipsum  consectetur adipisicing elit. Dicta sequi vero nemo officiis, voluptate accusantium, excepturi mollitia neque soluta deserunt unde vitae cupiditate alias delectus ut? Sunt delectus  ipsa necessitatibus?";
let eng = "atoz"
let thai = "กtoฮ"
//(1) length
document.getElementById("ex11.3").innerHTML 
= "lorem" + lorem.length +"<br>" + "eng" + eng.length + "thai" + thai.length

//(2) position indexof start 0,1,2,3
document.getElementById("ex11.3.2").innerHTML 
= "\"ipsum\" position =" + lorem.indexOf("รpsum") + "<br>" ;

//(3) math(/txt/g) g is global
document.getElementById("ex11.3.3").innerHTML = lorem.match(/ipsum/g);

//(4) replace("old tex", "new text") or /old text/g แทนที่ทั้งหมด(คำแรกที่เจอ)
document.getElementById("ex11.3.4").innerHTML 
= lorem.replace("ipsum","แทนที่แล้ว")
//() replace("old tex", "new text") or /old text/g แทนที่ทั้งหมด
document.getElementById("ex11.3.5").innerHTML 
= lorem.replace(/ipsum/g,"แทนที่แล้ว")

//(6) ex11.3.6 toUpperCase()
document.getElementById("ex11.3.6").innerHTML = lorem.toLocaleUpperCase();

//(7) ex11.3.6 toLowerCase()
document.getElementById("ex11.3.7").innerHTML = lorem.toLocaleLowerCase();
