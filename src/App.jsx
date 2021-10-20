import React from 'react';
import Graph from './Components/Graph/Graph';

document.getElementById('body').style.margin = '0px';

const Styles = () => ({
	App: {
		display: 'flex',
		flexDirection: 'row',
		width: '100vw',
		height: '100vh',
	},
	SidePanel: {
		width: '20%',
		height: '100%',
		backgroundColor: '#4169E1',
	},
	GraphContainer: {
		width: '80%',
		height: '100%',
		backgroundColor: '#222',
	},
});

export function App() {
	const styles = Styles();
	return (
		<div className="App" style={styles.App}>
			<div className="App" style={styles.SidePanel} />
			<div className="App" style={styles.GraphContainer}>
				<Graph />
			</div>
		</div>
	);
}
