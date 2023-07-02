const fibonacci = function (num) {
  if (num < 0) return 'OOPS';
	const sequence = [0, 1];
	let first = sequence[0];
	let second = sequence[1];
	for (let i = 0; i < num; i++) {
		let next = first + second;
		first = second;
		second = next;
    sequence.push(next);
	}
  return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
