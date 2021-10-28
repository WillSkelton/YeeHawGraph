import React from 'react';
import { Handle } from 'react-flow-renderer';
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

	const styles = Styles();
	return (
		<div style={{
			...styles.NodeStyles,
			height: diameter || '60px',
			width: diameter || '60px',
			borderRadius: diameter || '60px',
			backgroundColor: backgroundColor || Colors.slate,
			color: color || Colors.white,
			borderStyle: selfLoop ? 'double' : 'none',
			borderColor: color || Colors.white,
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
