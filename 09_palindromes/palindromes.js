const palindromes = function (str) {
  const formatedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
	return formatedStr.split('').reverse().join('') === formatedStr;
};

// Do not edit below this line
module.exports = palindromes;
