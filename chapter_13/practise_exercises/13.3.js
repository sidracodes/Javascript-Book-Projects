let counter=0;
function f1(value){
 return new Promise((resolve,reject)=>{
  setTimeout(() => {
   counter++;
   resolve(`value:${value} counter:${counter}`)
  }, 1000);
 })
}
async function f2(val){
 const x= await f1(val);
 console.log(x);
 }
for (let index = 1; index <= 10; index++) {
f2(index);
}
