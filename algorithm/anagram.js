var utility=require('../Utility/utility')
function anagram()
{
    var read=utility.input();
   
    read.question("enter the string 1:",function(s1){
        read.question("enter the string 2",function(s2){
        
                utility.algoanagram(s1,s2);
                read.close()
            
        })
       })
     
}
anagram();