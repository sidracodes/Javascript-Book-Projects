// BODY MASS INDEX CALCULATOR
var prompt= require('prompt-sync')();
let height = prompt("Enter height in inches");
let weight = prompt("Enter weight in pounds");
const oneInch = 2.54;
const oneKilo = 2.2046;
let centimeters= height * oneInch;
let kilos= weight / oneKilo;
let meters= centimeters/100;


console.log(`${height} inch height is equals to ${centimeters} centimeters`);
console.log(`${weight} pound weight is equals to ${kilos} kilos`);
console.log(`${centimeters} centimeters height is equals to ${meters} meters`)
let bmi= kilos/(meters * meters);
console.log(`Then BMI is equals to ${bmi}`);