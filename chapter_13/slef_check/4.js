function myfun(){
 return new Promise((resolve, reject) => {
  resolve('HELLO')
 })
}
 myfun()
 .then(
  function(val){
   console.log(val);
  },
  function(err){
console.log(err);
  }
 )
 // --------------------------------------------------

async function myfun2(){
return 'hello'
 }
  myfun2()
  .then(
   function(val){
    console.log(val);
   },
   function(err){
 console.log(err);
   }
  )