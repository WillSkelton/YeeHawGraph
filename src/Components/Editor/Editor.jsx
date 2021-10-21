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

const Styles = () => ({
	tableHeader: {
		padding: '0px',
	},
	headerRow: {
		borderBottom: '2px solid black',
		boxSizing: 'border-box',
	},
	headerCell: {
		padding: '0px',
	},
	tableCell: {
		// padding: '0px',
	},
	addButton: {
		padding: '0px',
	},
	vertexColumn: {
		// padding: '0px 0px 0px 4px',
		borderRight: '2px solid black',
		boxSizing: 'border-box',
	},
});

export function Editor(props) {
	const { vertexSet } = props;

	const styles = Styles();

	const vertices = Object.keys(vertexSet);

	return (
		<TableContainer component={Paper}>
			<Table size="small">
				<TableHead style={styles.tableHeader}>
					<TableRow style={styles.headerRow}>
						<TableCell
							align="center"
							style={{
								...styles.vertexColumn,
								...styles.headerCell,
							}}>
							<Tooltip placement="right" title="Click to Add Vertex">
								<IconButton style={styles.addButton}>
									<AddSharp />
								</IconButton>
							</Tooltip>
						</TableCell>
						{
							vertices.map(vertex => {
								console.log(vertex);
								return (
									<TableCell align="center" style={styles.headerCell}>
										{vertex}
									</TableCell>
								);
							})
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						vertices.map(vertex => (
							<TableRow>
								<TableCell
									align="center"
									style={{
										...styles.tableCell,
										...styles.vertexColumn,
									}}>
									{vertex}
								</TableCell>
								{
									vertexSet[vertex].map(item => (
										<TableCell
											align="center"
											style={{
												...styles.tableCell,
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
