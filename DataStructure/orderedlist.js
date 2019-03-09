/*Purpose      :   Search a number from given list  if present remove it otherwise add it to the file.
* 
* @description
* 
* @file        :   orderedlist.js
* @overview    :   Read .a List of Numbers from a file and arrange it ascending Order in a Linked List.
* @author      :   Kshiteej Nawkar <knawkar@gmail.com>
* @version     :   1.0
* @since       :   07/03/2019  */
var link = require('./DSutility/linlkedlist')
var utility = require('../Utility/utility')

var read = require("readline-sync")
try {
    var linklist = new link.linkedlist();
    var arr1 = utility.fileCall('/home/admin1/Documents/file1.txt')
    var arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr[i] = parseInt(arr1[i]);
    }
    console.log("After sorted array");
    arr = utility.bubblesort(arr);
    console.log(arr);
    for (var i = 0; i < arr.length; i++)
        linklist.add(arr[i]);

    var d = linklist.display()
    console.log(d)
    var search_word = read.questionInt("Enter the data you want search : ")
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
    utility.writeFile("/home/admin1/Documents/file1.txt", display)
}
catch (e) {
    console.log(e);
}