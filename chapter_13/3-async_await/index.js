function saysomething(x){
 return new Promise(resolve =>{
setTimeout(()=>{
 resolve("something "+ x)
},2000);
 });
}
async function talk(y){
const words= await saysomething(y);
console.log(words);
}
talk(3);

// -------------------------------------------------

function saysomethingtome(x){
 return new Promise(resolve =>{
setTimeout(()=>{
 resolve("something "+ x)
},2000);
 });
}
function talks(y){
const words= saysomethingtome(y);
console.log(words);
}
talks(3);
talks(5);

