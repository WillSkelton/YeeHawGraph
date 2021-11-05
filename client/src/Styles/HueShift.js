export function HueShift(color, shift) {
	const hue = color.split('HSL(')[1].split(',')[0];
	const rest = color.split(hue);

	let newHue = shift ?
		(parseInt(hue, 10) + shift) :
		(parseInt(hue, 10) + 30);

	if (newHue < 0) {
		newHue = 360 - newHue;
	} else if (newHue > 360) {
		newHue %= 360;
	}

	return rest.join(`${newHue}`);
}
