const repeatString = function(inString, times) {
    if (times < 0) {
        return "ERROR";
    }
    let outString = "";
    for (let i = 0; i < times; i++) {
        outString = outString + inString;        
    }
    return outString;
};

// Do not edit below this line
module.exports = repeatString;
