var mer=require('../Utility/utility');
const readline=require('readline-sync');
var num = readline.questionInt("Enter the size of array:");

var arr=[];
arr=mer.createArraystring(num);
arr=mer.mergesort(arr);
console.log(arr);