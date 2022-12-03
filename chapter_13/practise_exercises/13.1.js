function greet(fullName){
 console.log(`Welcome, ${fullName}`)
}
function processCall(user, callback){
 callback(user);
}
processCall("Laurence Svekis", greet);