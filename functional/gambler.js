var utility=require('../Utility/utility')
function gam()
{
    var read=utility.input();
    read.question("Enter the stake : ",function(stake){
        read.question("Enter the goal: ",function(goal){
            read.question("Enter the bet: ",function(bet){
                utility.gambler(stake,goal,bet);
                read.close();
            })
        })
    })
}
gam();