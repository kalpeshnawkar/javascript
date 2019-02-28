var conv=require('../Utility/utility');
const readline=require('readline-sync');
var temp=readline.question("please entered temperature : ");
var i=readline.question("1 for celsius to fahreinheit 2 for fahreinheit to celsius :");
conv.temperaturConversion(temp,i);