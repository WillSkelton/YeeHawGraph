import { GridOnSharp, LayersSharp, MenuSharp, SettingsSharp, BarChartSharp } from '@mui/icons-material';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { makeStyles, StylesContext } from '@mui/styles';

import React, { useEffect, useState } from 'react';
import { Editor } from './Components/Editor/Editor';
import { Graph } from './Components/Graph/Graph';
import { Legend } from './Components/Legend/Legend';
import { Settings } from './Components/Settings/Settings';
import { Stats } from './Components/Stats/Stats';
import { GenerateNodes } from './Modules/GenerateNodes';
import { Colors } from './Styles/Colors';

document.getElementById('body').style.margin = '0px';

const useStyles = state => makeStyles({
	App: {
		display: 'flex',
		flexDirection: state.menuVertical ? 'row' : 'column',
		width: '100vw',
		height: '100vh',
	},
	Menu: {
		width: state.menuVertical ? '40px' : '100%',
		height: state.menuVertical ? '100%' : '40px',
		backgroundColor: 'black',
		border: `2px solid ${Colors.blue}`,
		boxSizing: 'border-box',

		display: 'flex',
		flexDirection: state.menuVertical ? 'column' : 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	menuButton: {
		'&:hover': {
			color: Colors.green,
		},
		color: Colors.blue,
	},
	SidePanel: {
		display: 'flex',
		backgroundColor: 'black',
		flexDirection: state.menuVertical ? 'row' : 'column',
		// eslint-disable-next-line no-nested-ternary
		width: state.menuVertical ?
			state.menuOpen ?
				`${state.panelSize}%` :
				'0%' :
			'100%',
		// eslint-disable-next-line no-nested-ternary
		height: state.menuVertical ?
			'100%' :
			state.menuOpen ?
				`${state.panelSize}%` :
				'0%',
	},
	Editor: {
		width: '100%',
		height: '100%',
		backgroundColor: 'black',
		boxSizing: 'border-box',
		overflowX: 'auto',
		overflowY: 'auto',

	},
	Legend: {
		width: '100%',
		height: '100%',
		backgroundColor: 'black',
		boxSizing: 'border-box',
		// border: '2px solid white',
	},
	Stats: {
		width: '100%',
		height: '100%',
		overflowX: 'auto',
		overflowY: 'auto',
	},
	GraphContainer: {
		// eslint-disable-next-line no-nested-ternary
		width: state.menuVertical ?
			state.menuOpen ?
				`${100 - state.panelSize}%` :
				'100%' :
			'100%',
		// eslint-disable-next-line no-nested-ternary
		height: state.menuVertical ?
			'100%' :
			state.menuOpen ?
				`${100 - state.panelSize}%` :
				'100%',
		backgroundColor: '#222',
	},
})();

export function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuVertical, setMenuVertical] = useState(true);
	const [showMinimap, setShowMinimap] = useState(true);
	const [selectedTab, setSelectedTab] = useState(0);

	const panelSizes = [30, 20, 30, 40];

	const classes = useStyles({ menuOpen, menuVertical, panelSize: panelSizes[selectedTab] });

	const [vertexSet, setVertexSet] = useState({
		A: [0, 1, 0, 0],
		B: [0, 0, 1, 0],
		C: [0, 0, 0, 1],
		D: [1, 0, 0, 0],
	});

	const [elements, setElements] = useState([]);

	// const matrix = Object.values(vertexSet).reduce((previous, current) => ([...previous, ...current]), []).join('');

	// console.log(matrix);

	useEffect(() => {
		setElements(GenerateNodes(vertexSet));
	}, []);

	const updateVertexSet = newValue => {
		setVertexSet(newValue);
		setElements(GenerateNodes(newValue));
	};

	const clearVertexSet = () => {
		const copy = { ...vertexSet };

		Object.keys(copy)
			.forEach(key => {
				copy[key] = copy[key].map(() => 0);
			});

		updateVertexSet(copy);
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const handleMenuItemClick = itemNumber => {
		setMenuOpen(!menuOpen || (itemNumber !== selectedTab));
		setSelectedTab(itemNumber);
	};

	return (
		<div className={classes.App}>
			<div className={classes.Menu}>
				<Tooltip title="Menu" placement="right">
					<IconButton onClick={toggleMenu}>
						<MenuSharp className={classes.menuButton} />
					</IconButton>
				</Tooltip>
				<Tooltip title="Editor" placement="right">
					<IconButton onClick={() => handleMenuItemClick(0)}>
						<GridOnSharp className={classes.menuButton} />
					</IconButton>
				</Tooltip>
				<Tooltip title="Stats" placement="right">
					<IconButton onClick={() => handleMenuItemClick(1)}>
						<BarChartSharp className={classes.menuButton} />
					</IconButton>
				</Tooltip>
				<Tooltip title="Legend" placement="right">
					<IconButton onClick={() => handleMenuItemClick(2)}>
						<LayersSharp className={classes.menuButton} />
					</IconButton>
				</Tooltip>
				<Tooltip title="Settings" placement="right">
					<IconButton onClick={() => handleMenuItemClick(3)}>
						<SettingsSharp className={classes.menuButton} />
					</IconButton>
				</Tooltip>
			</div>
			{
				menuOpen && (
					<div className={classes.SidePanel}>
						{
							selectedTab === 0 && (
								<div className={classes.Editor}>
									<Editor
										vertexSet={vertexSet}
										setVertexSet={updateVertexSet}
										clearVertexSet={clearVertexSet} />
								</div>
							)
						}
						{
							selectedTab === 1 && (
								<div className={classes.Stats}>
									<Stats elements={elements} />
								</div>
							)
						}
						{
							selectedTab === 2 && (
								<div className={classes.Legend}>
									<Legend />
								</div>
							)
						}
						{
							selectedTab === 3 && (
								<div className={classes.Legend}>
									<Settings
										toggleMenuOrientation={() => setMenuVertical(!menuVertical)}
										toggleMinimap={() => setShowMinimap(!showMinimap)}
										menuVertical={menuVertical}
										showMinimap={showMinimap} />
								</div>
							)
						}
					</div>
				)
			}
			<div className={classes.GraphContainer}>
				<Graph elements={elements} showMinimap={showMinimap} />
			</div>
		</div>
	);
}
