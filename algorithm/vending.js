var vend=require('../Utility/utility')
const readline=require('readline-sync')
function vendmachine(){
    var amount=readline.question("enter amount: ");
    vend.vendingMachine(amount,0,0);
}
vendmachine();