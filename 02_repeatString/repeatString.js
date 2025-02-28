let repeatString = function(string, num) {
    let timesRepeated = 1;
    let fullStr = "";

    if (num < 0){
        return 'ERROR';
    }

    while(timesRepeated <= num){
        fullStr += string;
        timesRepeated++;
    }
    return fullStr;

};

// Do not edit below this line
module.exports = repeatString;
