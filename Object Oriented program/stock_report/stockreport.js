/*Purpose      :   Print a Stock Report with total value of each Stock and the total value of Stock.
* 
* @description
* 
* @file        :   stockreport.js
* @overview    :   get a number of Stocks, for Each Stock from user, Read In the Share Name, Number of Share, and Share Price or
                   Calculate the value of each stock and the total value
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   09/03/2019  */
var read=require('readline-sync')
var cal=require('../stock_report/stockcalculation')
console.log("========================STOCK REPORT===========================")
console.log()
var numberofstock=read.questionInt("Enter the number of stock : ")
console.log()
function stockReport(){
    /**
     *call a stockCalculate function to calculate a total value
     */
    cal.stockCalculate(numberofstock)

}
stockReport()