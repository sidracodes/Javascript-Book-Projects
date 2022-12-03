 // ----------------------------------------
//  else if statements
// ------------------------------------------
let age_= 10;
let cost=0;
let msg;
if(age_ < 3){
 cost=0;
msg='cost: free';
}
else if(age_ < 12){
 cost=5;
msg='cost: discount, 5 dollars';
}
else if(age_ < 65){
 cost=10
msg='cost: 10 dollars';
}
else if(age_ >=65){
 cost=7
msg='cost: 7 dollars';
}

console.log(msg);
console.log(`your total cost is ${cost} dollars`);