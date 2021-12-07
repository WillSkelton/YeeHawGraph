/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-len */
import { Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { Colors } from '../../Styles';

const Styles = () => ({
	root: {
		padding: '16px',
	},

	section: {
		margin: '8px 0px',
	},

	h1: {
		// fontSize: '36px',
		fontSize: '2.5rem',
		color: Colors.white,
	},

	h2: {
		fontSize: '2rem',
		color: Colors.white,
	},

	h3: {
		fontSize: '1.5rem',
		color: Colors.white,
	},

	body1: {
		fontSize: '1rem',
		color: Colors.white,
	},

	text: {
		color: Colors.white,
	},

	tableCell: {
		color: Colors.white,
		'text-align': 'left',
	},

	divider: {
		color: Colors.white,
		backgroundColor: Colors.white,
	},

	table: {
		margin: '16px 0px 16px 0px',
		border: `1px solid ${Colors.white}`,
	},
});

export function Legend() {
	const styles = Styles();

	return (
		<div style={styles.root}>
			<div style={styles.section}>
				<Typography style={styles.h2}>Creating a graph:</Typography>
				<Typography style={styles.body1}>{'To create a graph, open up the "Editor" tab to access the Adjacency Matrix Editor.'}</Typography>
				<Divider style={styles.divider} />
			</div>
			<div style={styles.section}>
				<Typography style={styles.h2}>Interacting with a Graph:</Typography>
				<div style={styles.section}>
					<Typography style={styles.h3}>Adding a Vertex</Typography>
					<Typography style={styles.body1}>{'To add a vertex, click the "+" button in the upper left corner of the matrix editor.'}</Typography>
					<Divider style={styles.divider} />

				</div>
				<div style={styles.section}>
					<Typography style={styles.h3}>Deleting a Vertex:</Typography>
					<Typography style={styles.body1}>To delete a vertex, right click (or long press) on letter of that vertex.</Typography>
					<Divider style={styles.divider} />

				</div>
				<div style={styles.section}>
					<Typography style={styles.h3}>Adding an Edge:</Typography>
					<Typography style={styles.body1}>To add an edge, click the cell of the row and column you want to be connected. Left clicking increases the cell value and right-clicking decreases it. The table below shows which numbers correspond to which edge types.</Typography>
					<TableContainer style={styles.table}>
						<Table size="small">
							<TableHead>
								<TableRow>
									<TableCell style={styles.tableCell}>Number</TableCell>
									<TableCell style={styles.tableCell}>Edge Type</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell style={styles.tableCell}>0</TableCell>
									<TableCell style={styles.tableCell}>None</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={styles.tableCell}>1</TableCell>
									<TableCell style={styles.tableCell}>Directed from Row to Column</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={styles.tableCell}>2</TableCell>
									<TableCell style={styles.tableCell}>Undirected</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Divider style={styles.divider} />
				</div>
				<div style={styles.section}>
					<Typography style={styles.h3} id="changing-the-color-of-a-vertex">Changing the Color of a Vertex:</Typography>
					<Typography style={styles.body1}>To change the color of a vertex, right click on it. There are 7 colors and they will cycle around.</Typography>
					<Divider style={styles.divider} />
				</div>
				<div style={styles.section}>
					<Typography style={styles.h3} id="clearing-the-matrix">Clearing the Matrix:</Typography>
					<Typography style={styles.body1}>{'To clear the matrix, right click the "+" button.'}</Typography>
					<Divider style={styles.divider} />
				</div>
			</div>

		</div>
	);
}
