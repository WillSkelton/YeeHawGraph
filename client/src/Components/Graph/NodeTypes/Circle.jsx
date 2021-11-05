import React, { useState } from 'react';
import { Handle } from 'react-flow-renderer';
import { HueShift } from '../../../Styles';
import { Colors } from '../../../Styles/Colors';

const Styles = () => ({
	NodeStyles: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,
		boxSizing: 'border-box',

	},
	Handle: {
		opacity: '0%',
	},
});

export function Circle(data) {
	const config = data.data;
	const { label, diameter, backgroundColor, color, selfLoop } = config;

	const [bgColor, setBGColor] = useState(backgroundColor || Colors.slate);
	const [fontColor, setFontColor] = useState(color || Colors.white);

	const handleRightClick = event => {
		event.preventDefault();
		setBGColor(HueShift(bgColor, 60));
		// setFontColor(HueShift(fontColor));
	};

	const styles = Styles();
	return (
		<div
			onContextMenu={handleRightClick}
			style={{
				...styles.NodeStyles,
				height: diameter || '60px',
				width: diameter || '60px',
				borderRadius: diameter || '60px',
				backgroundColor: bgColor,
				color: fontColor,
				borderStyle: selfLoop ? 'double' : 'none',
				borderColor: fontColor,
				borderWidth: selfLoop ? '4px' : '0px',
			}}>
			<Handle
				id="a"
				isConnectable={false}
				type="source"
				position="top"
				style={{
					...styles.Handle,
					top: '2%',
					left: '25%',
				}} />

			<Handle
				id="b"
				isConnectable={false}
				type="target"
				position="top"
				style={{
					...styles.Handle,
					top: '2%',
					left: '72%',
				}} />
			<Handle
				id="c"
				isConnectable={false}
				type="source"
				position="top"
				style={{
					...styles.Handle,
					top: '48%',
				}} />
			<div>{label}</div>
			<Handle
				id="d"
				isConnectable={false}
				type="target"
				position="bottom"
				style={{
					...styles.Handle,
					top: '48%',
				}} />
		</div>
	);
}
