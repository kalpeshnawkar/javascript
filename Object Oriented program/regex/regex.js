/*Purpose      :   Replace a give Message
* 
* @description
* 
* @file        :   regex.js
* @overview    :   Read the Given message and replace some string by user values                 
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   09/03/2019  */
var read =require('readline-sync')
var util=require('../Utility/oppsutil')
var name=read.question("Enter your Name : ")
var fullname=read.question("Enter your Full Name : ")
var contack=read.question("Enter Your Contack Number : ")
var date=new Date()
/**
 * call to regexRepalce Function with user input as parameter 
 */
util.regexReplace(name, fullname, contack, date)
