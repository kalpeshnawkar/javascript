/*Purpose      :   Search a element if present remove it otherwise add it to the file.
* 
* @description
* 
* @file        :   unordered.js
* @overview    :   Use readfile to read all the words in the file with space as seperator.
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   07/03/2019 */

var link = require('./DSutility/linlkedlist')
var utility = require('../Utility/utility')

var read = require("readline-sync")
try {
    var linklist = new link.linkedlist();
    var arr = utility.fileCall('/home/admin1/Documents/file.txt')
    for (var i = 0; i < arr.length; i++)
        linklist.add(arr[i]);

    var d = linklist.display()
    console.log(d)
    var search_word = read.question("Enter the data you want search : ")
    var search = linklist.search(search_word)
    console.log(search)
    console.log(search_word)
    if (search == true) {
        linklist.remove(search_word);

    }
    else {
        linklist.add(search_word)
    }
    display = linklist.display()
    console.log(display)
    utility.writeFile("/home/admin1/Documents/file.txt", display)
}
catch (e) {
    console.log(e);
}