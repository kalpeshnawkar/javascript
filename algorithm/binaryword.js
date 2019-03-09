var utility = require('../Utility/utility')
var read = require('readline-sync')

arr = utility.fileCall('/home/admin1/Documents/file.txt')

b = utility.binarySearchString(arr)
if (b >= 0) {
    console.log("word is match from the file " + arr[b] + " this is inside the file");

} else {
    console.log("word is not match from the file ");
}

