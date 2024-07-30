const reverseString = function(input) {
    //Two different ways here to reverse string in JS

    //Split String into array of substrings, 
    //reverse array in place, then 
    //join back into string object
    //return input.split("").reverse().join("");
    
    //Decrementing for loop going from end 
    //to beginning of original string
    //placing characters in new string
    newStr = '';
    for(let i = input.length - 1; i >= 0; i--) {
        newStr += input[i];
    }
    return newStr;

    //Last alternative: Recursion
    //Problem: can be time consuming, and also
    //recursion stack space can be an issue
};

// Do not edit below this line
module.exports = reverseString;
