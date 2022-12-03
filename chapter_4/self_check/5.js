let myTime = 9;
let outputs;
if (myTime >= 8 && myTime < 12) {
 outputs = "Wake up, it's morning";
} else if (myTime >= 12 && myTime < 13) {
 outputs = "Go to lunch";
} else if (myTime >= 13 && myTime <= 16) {
 outputs = "Go to work";
} else if (myTime > 16 && myTime < 20) {
 outputs = "Dinner time";
} else if (myTime >= 22) {
 outputs = "Time to go to sleep";
} else {
 outputs = "You should be sleeping";
}
console.log(outputs);