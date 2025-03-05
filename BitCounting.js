var countBits = function(n) {
    return n.toString(2).split('').filter(bit => bit === "1").length;
};

console.log(countBits(1234)); // Output: 5