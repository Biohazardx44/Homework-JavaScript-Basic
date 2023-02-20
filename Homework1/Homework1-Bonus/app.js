var MPGTolPer100K = 0.00425144;
var lp100kToMPG = 235.21442146661;
var mpg50 = 50;
var mpg25 = 25;
var lp100k = 12;
var mpg50Resoult = MPGTolPer100K * mpg50;
var mpg25Resoult = MPGTolPer100K * mpg25;
var lp100kToMPGResoult = lp100kToMPG * lp100k;

console.log("MPG 50 = ", mpg50Resoult, "l/100k");
console.log("MPG 25 =", mpg25Resoult, "l/100k");
console.log("l/100k =", lp100kToMPGResoult, "MPG");