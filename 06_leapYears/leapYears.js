const leapYears = function(year) {
    result = false;

    //Regular leap years: divisible by 4, but not by 100
    if(year % 4 == 0 && year % 100 != 0) {
        result = true;
    }
    //Century leap years: divisible by 400, and also therefore by 100
    else if(year % 400 == 0) {
        result = true;
    }

    return result;
};

// Do not edit below this line
module.exports = leapYears;
