export function StringIncrement(str) {
	const lastIndex = str.length - 1;

	if (lastIndex < 0) {
		return 'A';
	}

	if (str[lastIndex] === 'Z') {
		const copy = str.split('');

		const newChar = 'A';

		copy[lastIndex] = newChar;
		return `A${copy.join('')}`;
	}

	const copy = str.split('');

	const lastChar = str[lastIndex];
	const newChar = String.fromCharCode(lastChar.charCodeAt(0) + 1);

	copy[lastIndex] = newChar;
	return copy.join('');
}
