function add (a,b) {
	const add = a + b;
	return add;
}

add = add(2,3);
console.log("Add: " + add);

function subtract (a,b) {
	const subtract = a - b;
	return subtract;
}

subtract = subtract(2,3);
console.log("Subtract: " + subtract);

function sum (array) {
	let sum = 0;
	array.forEach (function(number){
		sum = number + sum;
	});
	return sum
}

let array = [2,4,6,8];
sum = sum(array);
console.log("Sum: " + sum);

function multiply (a,b) {
	const multiply = a * b;
	return multiply;
}

multiply = multiply(6,8);
console.log("Multiply: " + multiply);

function power(a,b) {
	const power = Math.pow(a,b);
	return power;
}

function factorial(a) {
	let afac = a - 1;
	while (afac > 0) {
		a = a * afac;
		afac--;
	}
	return a;
}

factorial = factorial(5);
console.log("Factorial: " + factorial);

// module.exports = {
// 	add,
// 	subtract,
// 	sum,
// 	multiply,
//     power,
// 	factorial
// }
