const palindromes = function (str) {
    const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedStr === processedStr.split("").reverse().join("");
};

/* 

// OLD SOLUTION - BEFORE USING .replace(a,b);

const palindromes = function (fwdStr) {
    const strToTest = toAlphaNum(fwdStr).toLowerCase();
    return strToTest === strToTest.split("").reverse().join("");
};


const toAlphaNum = function (str) {
    return str.split("").filter(char => isAlphaNum(char)).join("");
};

const isAlphaNum = function (char) {
    const regex = /[A-Za-z0-9]/;
    return regex.test(char);

}
*/

// Do not edit below this line
module.exports = {
    palindromes,
    //toAlphaNum,
    //isAlphaNum
};
