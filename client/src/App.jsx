import { MenuSharp } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Editor } from './Components/Editor/Editor';
import { Graph } from './Components/Graph/Graph';
import { GenerateNodes } from './Modules/GenerateNodes';
import { Colors } from './Styles/Colors';

document.getElementById('body').style.margin = '0px';

const Styles = state => ({
	App: {
		display: 'flex',
		flexDirection: 'row',
		width: '100vw',
		height: '100vh',
	},
	Menu: {
		width: '40px',
		backgroundColor: 'black',
		border: `2px solid ${Colors.blue}`,
		boxSizing: 'border-box',

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	menuButton: {
		color: Colors.blue,
	},
	SidePanel: {
		display: 'flex',
		flexDirection: 'column',
		width: state.menuOpen ? '30%' : '0%',
		height: '100%',
		backgroundColor: 'black',
	},
	Editor: {
		width: '100%',
		height: '70%',
		backgroundColor: 'black',
		boxSizing: 'border-box',

	},
	Legend: {
		width: '100%',
		height: '30%',
		backgroundColor: 'black',
		boxSizing: 'border-box',
		// border: '2px solid white',
	},
	GraphContainer: {
		width: state.menuOpen ? '70%' : '100%',
		height: '100%',
		backgroundColor: '#222',
	},
});

export function App() {
	const [menuOpen, setMenuOpen] = useState(true);
	const styles = Styles({ menuOpen });

	const [vertexSet, setVertexSet] = useState({
		A: [1, 0, 0, 0],
		B: [0, 1, 0, 0],
		C: [0, 0, 1, 0],
		D: [0, 0, 0, 1],
	});

	const [elements, setElements] = useState([]);

	useEffect(() => {
		setElements(GenerateNodes(vertexSet));
	}, []);

	const updateVertexSet = newValue => {
		setVertexSet(newValue);
		setElements(GenerateNodes(newValue));
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="App" style={styles.App}>
			<div className="App" style={styles.Menu}>
				<Tooltip title="Menu" placement="right">
					<IconButton onClick={toggleMenu}>
						<MenuSharp style={styles.menuButton} />
					</IconButton>
				</Tooltip>
			</div>
			{
				menuOpen && (
					<div className="App" style={styles.SidePanel}>
						<div style={styles.Editor}>
							<Editor
								vertexSet={vertexSet}
								setVertexSet={updateVertexSet} />
						</div>
						<div style={styles.Legend} />
					</div>
				)
			}
			<div className="App" style={styles.GraphContainer}>
				<Graph elements={elements} />
			</div>
		</div>
	);
}
