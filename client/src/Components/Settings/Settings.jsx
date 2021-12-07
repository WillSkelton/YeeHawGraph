import { Button } from '@mui/material';
import React from 'react';
import { Colors } from '../../Styles/Colors';

const Styles = state => ({
	root: {
		display: 'flex',
		flexDirection: state.menuVertical ? 'column' : 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
		height: '100%',
		width: '100%',
	},
	button: {
		margin: '12px 12px',
		backgroundColor: Colors.blue,
		color: Colors.white,
		textTransform: 'none',
	},
});

export function Settings(props) {
	const { toggleMenuOrientation, toggleMinimap, menuVertical } = props;

	const styles = Styles({ menuVertical });
	return (
		<div style={styles.root}>
			<Button
				style={styles.button}
				variant="contained"
				onClick={toggleMenuOrientation}>
				Flip Menu
			</Button>
			<Button style={styles.button} variant="contained" onClick={toggleMinimap}>
				Toggle Minimap
			</Button>
		</div>
	);
}
