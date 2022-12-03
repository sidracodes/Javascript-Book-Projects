// break and continue works on loops
// if condition fullfills it breaks//continueloop

for(i=0;i<10;i++){
 console.log(i);
 if(i==2){
  break;
 }
}
// -------------------------------\\\

let j=0;
while(j<50){
 j++;
 if(j%2==0){
  continue;
 }
 console.log(j);

}
// -----------------------------------------

let array=[['amna','bia','anya'],['aleena','ayesha','chips'],['almas','bushra','charlie']]
outer:
for (i of array) {
 inner:
 for(j of i){
  if(j.startsWith('a')){
   console.log(j);
   break inner;
  }
continue;
 }
}

// --------------------------------------------------------

let arr=[['amna','bia','anya'],['aleena','ayesha','chips'],['almas','bushra','charlie']]
outer:
for (i of arr) {
 inner:
 for(j of i){
  if(j.startsWith('a')){
   console.log(j);
   break outer;
  }
continue;
 }
}