function time() {
var then = new Date(2021, 03, 02), 
    now  = new Date;               


x1 = document.getElementById("help1");
x2 = Math.round((now - then) / (1000 * 60 * 60 * 24)); 
//('Тисак не отдает 10г уже '+x2+' дней');
var hh = document.createElement('h1');

var div = h1.append('Тесак не отдает 10г уже '+x2+' дней');


};

window.addEventListener("load",function() {
time();
});