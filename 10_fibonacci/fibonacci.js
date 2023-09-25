const fibonacci = function (nums) {
    if (parseInt(nums) < 0) return "OOPS";
    const numArr = [];
    for (let i = 0; i < nums; i++) {
        if (numArr.length < 2) numArr.push(1);
        else numArr.push(numArr[i - 2] + numArr[i - 1]);
    }
    return numArr[numArr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
