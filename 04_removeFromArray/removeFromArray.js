const removeFromArray = function(theArray, ...valuesToRemove) {
    for (let i = 0; i < valuesToRemove.length; i++) {
        for (let j = 0; j < theArray.length;j++) {
            if (theArray[j] === valuesToRemove[i]) {
                theArray.splice(j,1);
            }
        }
    }
    return theArray;
};

console.log(removeFromArray(["a","b","c"],"b"));


// Do not edit below this line
module.exports = removeFromArray;
