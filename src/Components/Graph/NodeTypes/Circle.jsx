import React from 'react';
import { Handle } from 'react-flow-renderer';

const Styles = () => ({
	NodeStyles: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,

	},
	Handle: {
		opacity: '0%',
	},
});

export function Circle(data) {
	const config = data.data;
	const { label, diameter, backgroundColor, color } = config;

	const styles = Styles();
	return (
		<div style={{
			...styles.NodeStyles,
			height: diameter || '60px',
			width: diameter || '60px',
			borderRadius: diameter || '60px',
			backgroundColor: backgroundColor || '#4169E1',
			color: color || '#FFF',
		}}>
			<Handle
				type="target"
				position="top"
				style={{
					...styles.Handle,
					top: '48%',
				}} />
			<div>{label}</div>
			<Handle
				type="source"
				position="bottom"
				style={{
					...styles.Handle,
					top: '48%',
				}} />
		</div>
	);
}
