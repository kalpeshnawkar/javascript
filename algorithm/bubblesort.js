var  utility=require('../Utility/utility')
const read=require('readline-sync')
function bubble()
{
   
    //var read1=utility.input();
    var num=read.question("enter the size of array");
    var arr=[] 
     arr=utility.createArray(num);
    arr= utility.bubblesort(arr,num);
     console.log(arr)     
}    
bubble()

