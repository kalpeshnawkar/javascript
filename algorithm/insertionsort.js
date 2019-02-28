var insert=require('../Utility/utility')
var read=require('readline-sync')
var num=read.question("Enter the size of array");
var arr=[]
arr=insert.createArraystring(num);
insert.insertionsort(arr,num)