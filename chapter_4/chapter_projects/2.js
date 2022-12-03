//  FRIEND CHECKER GAME
         
var prompt= require('prompt-sync')();
var freind_name=prompt("what is my bestfriend name?  ")
let msg;
switch(freind_name){
 case 'annie':
  msg=`yes ${freind_name} is my bestfirend`;
  break;
  default:
   msg=`i don't know ${freind_name}`
}
console.log(msg);