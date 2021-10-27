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
	Tooltip,
} from '@mui/material';

import { AddSharp } from '@mui/icons-material';
import { StringIncrement } from '../../Modules/StringIncrementor';

const red = '#DC143C';
const green = '#3CB371';

const Styles = () => ({
	table: {
		overflowX: 'scroll',
		overflowY: 'scroll',
	},
	tableRow: {
		margin: '0px',
		boxSizing: 'border-box',
	},
	tableCell: {
		padding: '0px',
	},
	tableHeader: {
		padding: '0px',
	},
	headerRow: {
		borderBottom: '2px solid black',
		boxSizing: 'border-box',
	},
	headerCell: {
		padding: '0px',
		minWidth: '16px',

	},

	addButton: {
		padding: '0px',
	},
	vertexColumn: {
		borderRight: '2px solid black',
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

	const handleCellClick = (row, column) => {
		vertexSet[row][column] = vertexSet[row][column] ? 0 : 1;
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
								...styles.vertexColumn,
								...styles.headerCell,
							}}>
							<Tooltip placement="right" title="Click to Add Vertex">
								<IconButton
									disabled={vertices.length >= 26}
									style={styles.addButton}
									onClick={handleVertexAdd}>
									<AddSharp />
								</IconButton>
							</Tooltip>
						</TableCell>
						{
							vertices.map(vertex => (
								<TableCell
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
											onClick={() => handleCellClick(vertex, column)}
											align="center"
											style={{
												...styles.tableCell,
												...styles.matrixCell,
												backgroundColor: item ? green : red,
												color: item ? 'black' : 'white',
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
