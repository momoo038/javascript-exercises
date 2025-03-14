const palindromes = function (word) {
    let lowerCase = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverseWord = lowerCase.split('').reverse().join('');

    return lowerCase === reverseWord ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
