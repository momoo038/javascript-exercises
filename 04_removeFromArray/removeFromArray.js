

const removeFromArray = function(array, ...num) {
    
    // filter out elements from 'array' that are also present in 'num'
    // basically makes a new array that stores all elements that do not equal 'num'
    return array.filter(val => !num.includes(val))
    
};

// Do not edit below this line
module.exports = removeFromArray;
