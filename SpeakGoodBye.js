var names = [john, james, jim];

(function (window) {
var johnGoodBye = {}
johnGoodBye.name = "john";
var GoodBye = "Goodbye ";
johnGoodBye.sayBye = function () {
console.log (GoodBye + johnGoodBye.name);
}

window.johnGoodBye = johnGoodBye;

}) (window);


(function (window){ 
var jamesGoodBye = {}
jamesGoodBye.name = "james";
var GoodBye ="Goodbye ";
jamesGoodBye.sayBye = function  () {
console.log (Goodbye + jamesGoodBye.name);
}

window.jamesGoodBye = jamesGoodBye;
})(window);

(function (window) {
var jimGoodBye = {}
jimGoodBye.name = "jim";
var GoodBye ="GoodBye ";
jimGoodBye.sayBye = function () {
console.log (Goodbye + jimGoodBye.name);
}
window.jimGoodBye = jimGoodBye;
})(window);