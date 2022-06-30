module.exports = function reverse (n) {
    const reverseString = n.toString();
    const reverseArrow = reverseString.split('');
    if (reverseArrow[0] === '-') {
      let newResult = reverseArrow.shift()
      return reverseArrow.reverse().join('');
    } else {
      return reverseArrow.reverse().join('');
    };
}
