import React, { useState } from 'react';
import { Editor } from './Components/Editor/Editor';
import { CustomFlow } from './Components/Graph/Graph';
import { GenerateNodes } from './Modules/GenerateNodes';

document.getElementById('body').style.margin = '0px';

const Styles = () => ({
	App: {
		display: 'flex',
		flexDirection: 'row',
		width: '100vw',
		height: '100vh',
	},
	SidePanel: {
		display: 'flex',
		flexDirection: 'column',
		width: '25%',
		height: '100%',
		backgroundColor: '#4169E1',
	},
	Editor: {
		width: '100%',
		height: '60%',
		backgroundColor: '#4169E1',
		boxSizing: 'border-box',
		border: '2px solid white',
	},
	Legend: {
		width: '100%',
		height: '40%',
		backgroundColor: 'black',
		boxSizing: 'border-box',
		border: '2px solid white',
	},
	GraphContainer: {
		width: '75%',
		height: '100%',
		backgroundColor: '#222',
	},
});

export function App() {
	const styles = Styles();

	const [vertexSet, setVertexSet] = useState({
		A: [0, 1, 1, 1],
		B: [1, 0, 1, 1],
		C: [1, 1, 0, 1],
		D: [1, 1, 1, 0],
	});

	const updateVertexSet = newValue => {
		setVertexSet(newValue);
	};

	return (
		<div className="App" style={styles.App}>
			<div className="App" style={styles.SidePanel}>
				<div style={styles.Editor}>
					<Editor
						vertexSet={vertexSet}
						setVertexSet={updateVertexSet} />
				</div>
				<div style={styles.Legend} />
			</div>
			<div className="App" style={styles.GraphContainer}>
				<CustomFlow elements={GenerateNodes(vertexSet)} />
			</div>
		</div>
	);
}
