var utility=require("../Utility/utility")
function primepalana()
{
    var read=utility.input()
    read.question("enter the number : ",function(n){
       utility.algoprogram3();
       utility.prime(n);
        utility.palindrome(n);
   

        utility.anagram(n);
      
    read.close();
    })
}
primepalana();