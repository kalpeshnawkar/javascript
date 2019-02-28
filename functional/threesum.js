var utility=require('../Utility/utility')
var read=require('readline-sync')
function sum1()
{
    var arr=[];
   var num=read.questionInt("Enter the sixe of array")
    arr=utility.createArray(num)
    utility.threesum1(arr);
}
sum1()