
// --------------------------------------------------------------------
// type casting : string(), number() , boolean()
// -----------------------------------------------------------------

let nr1=2;
let nr2='2';
console.log(nr1 * nr2);
console.log(nr1 + nr2);
// ----------------------------------------------------
nr1tostr= String(nr1)
console.log(typeof nr1tostr,nr1tostr);
// ----------------------------------------------------
nr2tonum= Number(nr2)
console.log(typeof nr2tonum,nr2tonum);
// ----------------------------------------------------------
let nr3='be good';
nr3tobool=Boolean(nr3)
console.log(typeof nr3tobool,nr3tobool);
// ------------------------------------------------
let v=null;
let v2=Number(v)
console.log(typeof v2 , v2);
// ------------------------------------------
let s='';
let n=Number(s)
console.log(typeof n,n);
// -------------------------------------
let b='hello';
m=Number(b);
console.log(typeof m,m);
// --------------------------------------------------

// type of boolean always returns true even if the value is false

let strtobool='false';
strtobool2=Boolean(strtobool);
console.log(typeof strtobool2,strtobool2);
// ------------------------------------------------------------------

// type of boolean returns false only if value is null,undefined or empty string

let strtobool3='';
strtobool4=Boolean(strtobool3);
console.log(typeof strtobool4,strtobool4);
// ------------------------------------------------------
let h=1;
let j='1';
console.log(h + Number(j));


// ----------------------------------------------------------/
 
let str='helllllo';
console.log(typeof str);
console.log(typeof(str));
// -----------------------------------
let str2;
let str3= undefined;
console.log(typeof str2);
console.log(typeof str3);
// ---------------------------------------
let str4=null
console.log(typeof str4);
// ---------------------------------
console.log(typeof Number("3"));
// ---------------------------------------
console.log(1 + + "1");
// -------------------------------------
let a;
console.log(typeof(typeof a));
// -------------------------------------
console.log(typeof 3-2);
// --------------------------------
console.log(true+false);
// -----------------------------
function myname(){
  return typeof true;
}
console.log(myname());
// ------------------------------
var aa=false;
if(typeof aa){
 console.log('msg 1');
}
else{
 console.log('msg 2');
}
// -------------------------------------
let r= 2009;
const func =( x=262 )=> {
 r=x;
 console.log(r);
}
console.log(r);
func(null);
// ----------------------------------------------------

//  coercion:

console.log( 1 +1 );
// ------------------------------------------------


/* 
one "+" is use to add
second "+" is use to convert string into number */

console.log( 1 + + "1" );
console.log(  2/(2+2)*5 );
// -------------------------------------------

console.log(0.1+0.2);
// -------------------------------------

console.log( 2 + "2");
console.log( 2 - "2");
console.log( 2 - "hi");

// --------------------------------------------///////////////////