//  EVALUATING A NUMBER GAME
var prompt= require('prompt-sync')();
var number=prompt("enter your number: ");
const n=9;
if(number>n){
 console.log(`${number} > ${n}`);
}
else if(number<n){
 console.log(`${number} < ${n}`);
}
if(number==n){
 console.log(`${number} = ${n}`);
}