const fibonacci = function(num) {
    num = parseInt(num);
    
    // base case: if num is 0 or 1, return num
    if (num < 0) return "OOPS";
    if (num == 0) return num;
    if (num == 1) return num;
 
    // fibonacci = Fn = Fn-1 + Fn-2 
    return fibonacci(num - 1) + fibonacci(num - 2)
};

// Do not edit below this line
module.exports = fibonacci;
