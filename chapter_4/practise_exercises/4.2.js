 // ----------------------------------------
// practise exercise 4.2
// -----------------------------------------
var prompt= require('prompt-sync')();
var userage=prompt('enter your age: ');
let message;
console.log(typeof userage);
var user_age= +userage;
console.log(typeof user_age);
if (user_age >=21){
  message= 'confirm entery, confirm purchase';

}
else if (user_age >=19){
  message= 'confirm entery, deny purchase'
}
else{
  message='deny entry';
}
console.log(message);