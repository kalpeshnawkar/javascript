var insert=require('../Utility/utility')
var read=require('readline-sync')
var num=read.question("Enter the size of array");
var arr=[]
arr=insert.createArraystring(num);
arr=insert.insertionsort(arr,num)
console.log(arr)