var utility=require("../Utility/utility")
var read=require('readline-sync')
function factor()
{
    
    var n=read.questionInt("Enter the number for primefactor  : ")
        utility.primefactor(n)
    
    
}

factor();