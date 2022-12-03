let step=3;
for (let index = 0; index < 1000; index+=step) {
if(index>10){
 break;
}
console.log(index); 
}

// -----------------------------------------

const myarray=[1,5,7];
for(e in myarray){
 console.log(Number(e));
 e=Number(e)+5;
 console.log(e);
}
console.log(myarray);