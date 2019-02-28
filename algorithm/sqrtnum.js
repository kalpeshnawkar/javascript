var sq=require('../Utility/utility');
var readline=require('readline-sync');
function sqfun(){
    var c=readline.questionInt("enter non negative value : ");
    sq.newton(c);
}
sqfun();
