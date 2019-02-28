var utility=require('../Utility/utility')
const readline=require('readline-sync')
var low = readline.questionInt("Enter starting number : ");
var high=readline.questionInt("Enter last number : ");
var n = utility.findNumber(low,high,readline);
console.log("Your number is : "+n);