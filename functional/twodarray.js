var utility=require('../Utility/utility')
var read=require('readline-sync')
function twod()
{
    
   
    var row=read.question("enter the size of row");
    var col=read.question("enter the size of col");
    var b=[]; 
     b=utility.twodarray(row,col);
    utility.twodlogic(b);
          
     
}
twod();