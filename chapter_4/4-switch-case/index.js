
// ----------------------------------------------------
// switch statements
// -----------------------------------------------------

let activity= 'dinner';
switch(activity)
{
  case 'getup':
    console.log('6 am');
    break;
  case 'breakfast':
    console.log('7 am');
    break;
  case 'work':
    console.log('8 am');
    break;
  case 'lunch':
    console.log('2 pm');
    break;
  case 'dinner':
    console.log('9 pm');
    break;
    default:
      console.log('i can not determine the current time');
}
// -----------------------------------------------
var prompt=require('prompt-sync')();
let grade=prompt('what is your grade: ');
switch(grade){
  case 'A':
  case 'B':
      console.log('good');
      break;
  case 'C':
  case 'D':
    console.log('okk');
    break;
  case 'E':
    console.log('poor');
    break;
  default:
    console.log('didnt get the grade');
}

// -----------------------------------------------------
