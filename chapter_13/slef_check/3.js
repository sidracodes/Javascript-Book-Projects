function checker(val){
 return new Promise((resolve,reject)=>{
  if(val>5){
   resolve("ready");
  }
  else{
   reject(new Error('oh noo'));
  }
 })
 }
 checker(6)
 .then(
  (data)=>{
 console.log(data);
 return 'steady'
  }
 )
 .then(
  (data)=>{
 console.log(data);
  }
 )
 .catch((err)=>{
 console.log(err);
 })
.finally(()=>{
 console.log('go');
}) 