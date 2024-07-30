const sumAll = function(a, b) {
    let sum = 0;
    /***checking for illegal arguments***/
    //negative numbers
    if(a < 0 || b < 0) { 
        return 'ERROR';
    }
    //non-integer
    else if((a % 1 != 0) || (b % 1 != 0) ) {
        return 'ERROR';
    }
    //not a number
    else if(typeof a != 'number' || typeof b != 'number') {
        return 'ERROR';
    }
    //If first number > second: swap
    if(a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }

    for(let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
