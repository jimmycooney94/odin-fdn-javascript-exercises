const sumAll = function(number1, number2) {
    if (number1 < 0 || number2 < 0) return "ERROR";
    if (typeof number1 !== "number" || typeof number2 !== "number") return "ERROR";
    if (number1 % 1 !== 0 || number2 % 1 !== 0) return "ERROR";

    const minNum = Math.min(number1,number2);
    const maxNum = Math.max(number1,number2);
    const numSteps = maxNum - minNum + 1; 

    let total = 0;
    for (let currentNum = minNum; currentNum <= maxNum; currentNum++) {
        total += currentNum;
    }
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
