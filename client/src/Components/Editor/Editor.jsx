import React from 'react';

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	IconButton,
} from '@mui/material';

import { AddSharp } from '@mui/icons-material';
import { StringIncrement } from '../../Modules/StringIncrementor';
import { Colors } from '../../Styles/Colors';

// const red = '#DC143C';
// const green = '#3CB371';

const Styles = () => ({
	table: {
		// overflowX: 'scroll',
		// overflowY: 'scroll',
	},
	tableRow: {
		margin: '0px',
		boxSizing: 'border-box',
		cursor: 'pointer',
	},
	tableCell: {
		padding: '0px',
		cursor: 'pointer',
	},
	tableHeader: {
		padding: '0px',
	},
	headerRow: {
		borderBottom: `2px solid ${Colors.blue}`,
		boxSizing: 'border-box',
	},
	headerCell: {
		padding: '0px',
		minWidth: '16px',
		backgroundColor: Colors.backgroundGray,
		color: Colors.white,
	},

	addButton: {
		padding: '0px',
		color: Colors.white,
	},
	vertexColumn: {
		color: Colors.white,
		backgroundColor: Colors.backgroundGray,
		borderTop: '0px',
		borderBottom: '0px',

		borderRight: `2px solid ${Colors.blue}`,
		boxSizing: 'border-box',
		width: '16px',
	},
	matrixCell: {
		border: '0px',
		// height: '16px',
		maxWidth: '16px',
	},
});

export function Editor(props) {
	const { vertexSet, setVertexSet } = props;

	const styles = Styles();

	const vertices = Object.keys(vertexSet);

	const cellColors = [
		{
			backgroundColor: Colors.red,
			color: Colors.white,
		},
		{
			backgroundColor: Colors.seaFoam,
			color: Colors.black,
		},
		{
			backgroundColor: Colors.cyan,
			color: Colors.black,
		},
	];

	const handleCellClick = (event, row, column) => {
		event.preventDefault();
		vertexSet[row][column] = (vertexSet[row][column] + 1) % 3;
		setVertexSet({ ...vertexSet });
	};

	const handleCellRightClick = (event, row, column) => {
		event.preventDefault();

		if (vertexSet[row][column] === 0) {
			vertexSet[row][column] = 2;
		} else {
			vertexSet[row][column] -= 1;
		}
		setVertexSet({ ...vertexSet });
	};

	const handleVertexAdd = () => {
		const nextVertexName = StringIncrement(vertices[vertices.length - 1]);

		const copy = { ...vertexSet };
		copy[nextVertexName] = vertices.map(() => 0);

		for (const vertex of Object.keys(copy)) {
			copy[vertex].push(0);
		}

		setVertexSet(copy);
	};

	const handleVertexDelete = (event, deleteVertex) => {
		const idx = vertices.findIndex(vertex => vertex === deleteVertex);

		vertices.forEach(vertex => {
			vertexSet[vertex].splice(idx, 1);
		});

		event.preventDefault();
		const copy = { ...vertexSet };
		delete copy[deleteVertex];

		setVertexSet(copy);
	};

	return (
		<TableContainer component={Paper} style={styles.table}>
			<Table size="small">
				<TableHead style={styles.tableHeader}>
					<TableRow style={{
						...styles.headerRow,
						...styles.tableRow,
					}}>
						<TableCell
							align="center"
							style={{
								...styles.tableCell,
								...styles.vertexColumn,
								...styles.headerCell,
							}}>
							<IconButton
								disabled={vertices.length >= 26}
								style={styles.addButton}
								onClick={handleVertexAdd}>
								<AddSharp />
							</IconButton>
						</TableCell>
						{
							vertices.map(vertex => (
								<TableCell
									onContextMenu={event => handleVertexDelete(event, vertex)}
									align="center"
									style={{
										...styles.headerCell,
									}}>
									{vertex}
								</TableCell>
							))
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						vertices.map(vertex => (
							<TableRow style={{
								...styles.tableRow,
							}}>
								<TableCell
									onContextMenu={event => handleVertexDelete(event, vertex)}
									align="center"
									style={{
										...styles.tableCell,
										...styles.vertexColumn,
									}}>
									{vertex}
								</TableCell>
								{
									vertexSet[vertex].map((item, column) => (
										<TableCell
											onClick={event => handleCellClick(event, vertex, column)}
											onContextMenu={event => handleCellRightClick(event, vertex, column)}
											align="center"
											style={{
												...styles.tableCell,
												...styles.matrixCell,
												backgroundColor: cellColors[item].backgroundColor,
												color: cellColors[item].color,
											}}>
											{item}
										</TableCell>
									))
								}
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
