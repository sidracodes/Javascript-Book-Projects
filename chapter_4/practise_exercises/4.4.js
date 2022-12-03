// ---------------------------------------------------
// practise exercise 4.4
// ---------------------------------------------------
let a=Math.random();
a1=a*9;
a2=Math.floor(a1);
console.log(`MAGIC 8BALL RANDOM NUMBER GENERATOR GENERATES: ${a2}`);
q='how many siblings you have ? ';
r= prompt(q);
let m;

switch(a2){
  case 0:
    m='cool'
    break;
  case 1:
    m='waow'
    break;
  case 2:
    m='great'
    break;
  case 3:
    m='superb'
    break;
  case 4:
    m='nice'
    break;
  case 5:
    m='seriously'
    default:
    m='......';
}
console.log(`question: ${q}`);
console.log(`answer: i have ${r} siblings`);
console.log(`comments: ${m}`);
