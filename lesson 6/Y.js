let parent = document.body;
let q=document.createElement('div');

q.className="buttons";

let block1=document.createElement('div');
let block2=document.createElement('div');
let block3=document.createElement('div');
let block4=document.createElement('div');

let h31=document.createElement('h3');
h31.innerHTML="Генератор";
let h32=document.createElement('h3');
h32.innerHTML="2 произвольные функции с использованием итератора";
let h33=document.createElement('h3');
h33.innerHTML="Сложное наследование посредством классов, расширенное mix-in -ами";
let h34=document.createElement('h3');
h34.innerHTML="Приведение актуальной даты к другой культуре посредством локализации";

let h40=document.createElement('h4');
h40.innerHTML="Простой генератор, выводит элементы по очереди";
let h41=document.createElement('h4');
h41.innerHTML="1-я функция<br>(Переберает буквы введённого слова и выводит в алерт)";
let h42=document.createElement('h4');
h42.innerHTML="2-я функция<br>(Переберает массив и выводит значения на каждый клик)";
let h43=document.createElement('h4');
h43.innerHTML="Особой наглядности тут нет<br>(смотри код)";

let h61=document.createElement('h6');
h61.innerHTML="Результат";
let h62=document.createElement('h6');
h62.innerHTML="Результат";

let hr1=document.createElement('hr');
let hr2=document.createElement('hr');
let hr3=document.createElement('hr');
let hr4=document.createElement('hr');

let b1=document.createElement('button');
b1.id="b1";
b1.innerHTML="run";
let b2=document.createElement('button');
b2.id="b2"
b2.innerHTML="run";
let b3=document.createElement('button');
b3.id="b3"
b3.innerHTML="run";
let b4=document.createElement('button');
b4.id="b4"
b4.innerHTML="run";
let b5=document.createElement('button');
b5.id="b5"
b5.innerHTML="run";

let in1=document.createElement('input');
in1.id="in1";
in1.setAttribute("type", "text");
in1.setAttribute("placeholder","Введите слово");
let in2=document.createElement('input');
in2.id="dat";
in2.setAttribute("type", "date");


let res1=document.createElement('div');
res1.id="result1"
let res2=document.createElement('div');
res2.id="result"
let res3=document.createElement('div');
res3.id="resultt"

let sp=document.createElement('span');
sp.innerHTML="Текущая дата<br>(или выберите любую другую)";

let l=document.createElement('label');
l.innerHTML="Выберите формат (культуру)";

let br=document.createElement('br');

let select=document.createElement('select');
select.id="sel";

let option1=document.createElement('option');
option1.innerHTML="Русский";
let option2=document.createElement('option');
option2.innerHTML="Американский";
let option3=document.createElement('option');
option3.innerHTML="Британский";
let option4=document.createElement('option');
option4.innerHTML="Корейский";
let option5=document.createElement('option');
option5.innerHTML="Арабский";
let option6=document.createElement('option');
option6.innerHTML="Японский";
let option7=document.createElement('option');
option7.innerHTML="Китайский";
let option8=document.createElement('option');
option8.innerHTML="Тайский";

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
select.appendChild(option5);
select.appendChild(option6);
select.appendChild(option7);
select.appendChild(option8);

parent.appendChild(q);
q.appendChild(block1);
block1.appendChild(h31);
block1.appendChild(hr1);
block1.appendChild(h40);
block1.appendChild(b3);
block1.appendChild(h61);
block1.appendChild(res1);
q.appendChild(block2);
block2.appendChild(h32);
block2.appendChild(hr2);
block2.appendChild(h41);
block2.appendChild(in1);
block2.appendChild(b1);
block2.appendChild(h42);
block2.appendChild(b2);
block2.appendChild(h62);
block2.appendChild(res2);
q.appendChild(block3);
block3.appendChild(h33);
block3.appendChild(hr3);
block3.appendChild(h43);
block3.appendChild(b4);
q.appendChild(block4);
block4.appendChild(h34);
block4.appendChild(hr4);
block4.appendChild(sp);
block4.appendChild(in2);
block4.appendChild(br);
block4.appendChild(l);
block4.appendChild(select);

block4.appendChild(b5);
block4.appendChild(res3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1
b1.onclick = function() 
 {
b1.style.color="red";
var text=document.getElementById("in1").value;
for (let char of text) alert( char ); 
};

arr=["a","b","c"];

var iterator = arr[Symbol.iterator]();
var res=document.getElementById("result");

b2.onclick = function() 
 {

var result = iterator.next();
if (result.done==true) 
res.innerHTML="Всё";
else
res.innerHTML=result.value;
console.log(result);

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2
function* MyGener()
{
var x="-й элемент";
var index = 0; 
while(true)
yield index++ +x;
}

var a = MyGener();

b3.onclick = function() 
 {
//console.log(a.next().value);
var vv = document.getElementById("result1");
vv.innerHTML=(a.next().value);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3


b4.onclick = function() 
 {

// примесь
let Mixin = {
  golos() {
    alert(`Gav-gav`);
  },
  lapu() {
    alert(`Gav`);
  },

poroda(){return "taksa"},
color(){return "black"}
};

// использование:
class Animal {
  constructor(name) {
    this.name = name;
    //legs=4;
  }
}

// копируем методы
Object.assign(Animal.prototype, Mixin);

new Animal("Бобик").golos();

console.log(new Animal("Бобик").poroda());

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4

document.getElementById("dat").valueAsDate = new Date();

b5.onclick = function() 
{
var date = document.getElementById("dat").valueAsDate;	

if (document.getElementById('sel').options[document.getElementById('sel').selectedIndex].text=="Русский")
{
const newdate = date.toLocaleDateString('ru');//
document.getElementById("resultt").innerHTML=newdate;
console.log(newdate + " Американский");
}
if (document.getElementById('sel').options[document.getElementById('sel').selectedIndex].text=="Американский")
{
const newdate = date.toLocaleDateString('en-US');//
document.getElementById("resultt").innerHTML=newdate;
console.log(newdate + " Американский");
}
if (document.getElementById('sel').options[document.getElementById('sel').selectedIndex].text=="Британский")
{
const newdate = date.toLocaleDateString('en-GB');//
document.getElementById("resultt").innerHTML=newdate;
console.log(newdate + " Британский");
}
if (document.getElementById('sel').options[document.getElementById('sel').selectedIndex].text=="Корейский")
{
const newdate = date.toLocaleDateString('ko-KR');//
document.getElementById("resultt").innerHTML=newdate;
console.log(newdate + " Корейский");
}
if (document.getElementById('sel').options[document.getElementById('sel').selectedIndex].text=="Арабский")
{
const newdate = date.toLocaleDateString('ar-EG');//
document.getElementById("resultt").innerHTML=newdate;
console.log(newdate + " Арабский");
}
if (document.getElementById('sel').options[document.getElementById('sel').selectedIndex].text=="Японский")
{
const newdate = date.toLocaleDateString('ja-JP-u-ca-japanese');//
document.getElementById("resultt").innerHTML=newdate;
console.log(newdate + " Японский");
}
if (document.getElementById('sel').options[document.getElementById('sel').selectedIndex].text=="Китайский")
{
const newdate = date.toLocaleDateString('zh-Hans-CN');//
document.getElementById("resultt").innerHTML=newdate;
}
if (document.getElementById('sel').options[document.getElementById('sel').selectedIndex].text=="Тайский")
{
const newdate = date.toLocaleDateString('th-TH-u-nu-thai');//
document.getElementById("resultt").innerHTML=newdate;
}

}
