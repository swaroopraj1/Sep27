// function VarKeyword  () {
// 		var name = "Swaroop";
// 		alert("Name is: "+ name); // Displays Name is Swaroop
// }
// VarKeyword();
// alert(state); // state is not defined

function VarKeyword (number) {
	if(number>10 ) {
	 var area = "Houston";
	 console.log(area);
	}
	console.log(area);
}
//console.log(area); //Area is not defined here 
VarKeyword(20);


var age = 25;
function LetKeyword() {
	if (age) {
		let age = 24;
		console.log(age);
	}
	console.log(age);
}
LetKeyword();

//Const LetKeyword
const name = "Swaroop";
//var name = "Raj";   //error: Duplicate declaration name
//let name = "Stephen"; //error: Duplicate declaration name
console.log(name);

/// Object and Array Destructring
//var [name, area, age] = details;
var abcd = "Swaroop,Kurnool,25";
var [xyz,area,age]= abcd.split(',');

//arrow functions

//ES5
function multiplication(a) {
	var b = 5;
	return a*b;
}
console.log(multiplication(7));
//ES6
let Multiply = (c) => c*c;
console.log(Multiply(6));
//ES5
var addition = function (x,y) {
	return x+y;
};
console.log(addition(7,13));

//ES6
var college = (name, city,age) => ({name:name, city:city, age:age});
(college('Swaroop','Kurnool',25));  //{ name: 'Swaroop', city: 'Kurnool', age: 25 }




