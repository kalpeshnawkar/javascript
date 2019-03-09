module.exports = {

    stockCalculate(numberofstock) {
        
        var val=require('../stock_report/stockvalues')
        var read=require('readline-sync')
        try {
            var stockvalue = 0
            var totalvalue = 0
            /** 
             *  create a for loop to get a user stock value upto number of share
            */
            for (var i = 0; i < numberofstock; i++) {
                /**
                 * get a stock value from user
                 */
                var sharename = read.question("Enter the sharename : ")
                var numberofshare = read.questionInt("Enter the number of share : ")
                var shareprice = read.questionInt("Enter the Share Price in Rupees : ")
                /**
                 * create a object of stock and pass a user stock value as a parameter 
                 */
                var stock = new val.stock(sharename, numberofshare, shareprice)
                /**
                 *   Invoke ValueOfStock fuction to calculate a value of each stock 
                 */
                stockvalue = stock.valueOfStock()
                console.log()
                console.log("stock value of share '" + sharename + "' is " + stockvalue + " Rs")
                /**
                 *    calculate a Total value of stock
                 */
                console.log()
                totalvalue = totalvalue + stockvalue

            }
            
            console.log('total vaule of stock is ' + totalvalue+' Rs')
        }
        catch (e)
        {
            console.log(e)
        }
}
}