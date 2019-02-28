var utility=require("../Utility/utility")
function factor()
{
    var read2=utility.input()
    read2.question("Enter the number : ",function(n){
        utility.primefactor(n)
        read2.close()
    })
}
factor();