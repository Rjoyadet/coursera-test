
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function (window) {
var YaakovGreeter = {}
YaakovGreeter.name  ="Yaaokov";
var Greeting = "Hello ";
YaakovGreeter.sayHello = function (){
console.log (Greeting + YaakovGreeter.name);
}

	window.yaakovGreeter = yaakovGreeter;
})(window);

(function (window) {
var PaulGreeter = {}
PaulGreeter.name = "Paul";
var Greeting = "Hello ";
PaulGreeter.sayHello = function () {
console.log (Greeting + PaulGreeter.name);
}

	window.paulGreeter = paulGreeter;
})(window);

(function (window) {
var frankGreeter = {}
frankGreeter.name = "frank";
var Greeting = "Hello ";
frankGreeter.sayHello = function () {
console.log (Greeting + frankGreeter.name);
}
	window.frankGreeter = frankGreeter.name;
})(window);

(function (window) {
var LarryGreeter = {}
LarryGreeter.name = "Larry";
var Greeting = "Hello ";
LarryGreeter.sayHello = function () {
console.log (Greeting + LarryGreeter.name);
}
	window.LarryGreeter = larryGreeter.name;
})(window);

(function (window) {
var PaulaGreeter = {}
PaulaGreeter.name ="Paula";
var Greeting = "Hello ";
PaulaGreeter.sayHello = function () {
console.log (Greeting + PaulaGreeter.name);
}
	window.paulGreeter = PaulGreeter.name;
})(window);
 
(function (window) { 
var lauraGreeter = {}
lauraGreeter.name  = "laura";
var Greeting = "Hello ";
lauraGreeter.sayHello = function () {
 console.log (Greeting + lauraGreeter.name);
 }
 window.lauraGreeter = lauraGreeter.name;

})(window);