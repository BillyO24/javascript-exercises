const isIn = function (arr, x) {
    let check = false;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
            check = true;
        }
    }
    return check;
}

const removeFromArray = function(arr, ...args) {
    newArr = [];

    arr.forEach(item => {
        if(!isIn(args, item)) {
            newArr.push(item);
        }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
