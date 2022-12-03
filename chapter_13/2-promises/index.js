
// -----------------------------------------------

let promise= new Promise((resolve,reject)=>{
 resolve("succcess");
 reject('error')
 })
 .then((v)=>{
  console.log(v);
  return 'we'
 })
 .then((v)=>{
  console.log(v);
  return 'can'
 })
 .then((v)=>{
  console.log(v);
  return 'chain'
 })
 .then((v)=>{
  console.log(v);
  return 'promises'
 })
 .then((v)=>{
  console.log(v);
 })
 .catch((v)=>{
  console.log(v);
 })
 
 // --------------------------------------------------

 let promises= new Promise(function(resolve,reject){
  let x=10;
  if(x>10){
   resolve(x)
  }
  else{
   reject("too low")
  }
 })
 promises.then(
  function(v){
console.log(`success`, v);
  },
  function(v){
console.log(`error`,v);
  }
 )
 // ---------------------------------------------