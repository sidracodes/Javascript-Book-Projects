// PASSWORD CHECKER
let allowed_password = ['password','admin123','sidra'];
function login(value){
 let result=allowed_password.includes(value);
return result;
}
function f1(val){
 return new Promise((resolve,reject)=>{
if(login(val)){
 resolve(
  {status: true}
 )
}

 else{
  reject(
   {status: false}
  )
 }
 })
}
function check_password(valu){
f1(valu)
.then((v)=>{console.log(v,'approve');})
.catch((v)=>{console.log(v,'reject');})
}
check_password('password');
check_password(1234);
check_password('pass');