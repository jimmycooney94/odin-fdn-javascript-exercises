const reverseString = function (forwardString) {
  let reversedString = "";
  const stringLength = forwardString.length;
  for (let i = 0; i < stringLength; i++) {
    reversedString += forwardString.charAt(stringLength - 1 - i);
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
