// ---------------------------------------------
// practise exercise 4.5
// -----------------------------------------------
let prize=prompt('select the number between 0 and 10: ')
p=+prize;
let output="my selection: ";
switch(p){
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("*** YOU GOT A+++ PRIZE //// **");
    break;
  case 6:
  case 7:
  case 8:
  case 9:
    console.log("*** YOU GOT b+++ PRIZE //// **");

}
console.log(`${output} ${p}`);
