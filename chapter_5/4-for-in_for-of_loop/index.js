let car={
 name: 'mira',
 color: 'black',
 year: 2020
}
// looping over objects diectly

for (const key in car) {
 console.log(key);
 console.log(car[key]);
 }

 // looping over objects by converting to an array
 for (const key of Object.keys(car)) {
  console.log(key);
  console.log(car[key]);
  }

 for (const key of Object.values(car)) {
  console.log(key);
 
  }

 for (const [key,value] of Object.entries(car)) {
  console.log(key);
  console.log(value);
 
  }


