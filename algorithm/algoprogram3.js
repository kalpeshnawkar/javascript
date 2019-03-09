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
var pali=require('../Utility/utility')
const readline=require('readline-sync')
function palindrome(){
    console.log("program start..");
    pali.isAnagramPalimdrome();
}
palindrome();