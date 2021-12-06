import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Colors } from '../../Styles';

const Styles = () => ({
	root: {
		padding: '8px',
	},
	tableCell: {
		color: Colors.white,
	},
	graphStats: {
		margin: '16px 0px',
	},
	vertexStats: {
		margin: '16px 0px',
	},
});

export function Stats(props) {
	const { elements } = props;

	const styles = Styles();

	const vertices = [];
	const edges = [];

	let selfLoops = 0;

	const vertexDegrees = {};

	// Calculate number of edges and vertices
	elements.forEach(element => {
		if (element.id.includes('->')) {
			edges.push(element);
			return;
		}

		if (element.data.selfLoop) {
			selfLoops++;
		}

		vertices.push(element);
	});

	edges.forEach(edge => {
		const [src, dest] = edge.id.split('->');

		if (!src || !dest) {
			return;
		}

		vertexDegrees[dest] = vertexDegrees[dest] === undefined ?
			1 :
			vertexDegrees[dest] + 1;

		if (src !== dest) {
			vertexDegrees[src] = vertexDegrees[src] === undefined ?
				1 :
				vertexDegrees[src] + 1;
		}
	});

	return (
		<div style={styles.root}>
			<div styles={styles.graphStats}>
				<Typography
					variant="h5"
					style={styles.tableCell}>
					Graph Stats:
				</Typography>
				<TableContainer>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell style={styles.tableCell}>
									Value
								</TableCell>
								<TableCell style={styles.tableCell}>
									Count
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell style={styles.tableCell}>
									Number of Vertices (n)
								</TableCell>
								<TableCell style={styles.tableCell}>
									{vertices.length}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell style={styles.tableCell}>
									Number of Edges (m)
								</TableCell>
								<TableCell style={styles.tableCell}>
									{edges.length}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell style={styles.tableCell}>
									Self Loops
								</TableCell>
								<TableCell style={styles.tableCell}>
									{selfLoops}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div style={styles.vertexStats}>
				<Typography
					variant="h5"
					style={styles.tableCell}>
					Degrees of Each Vertex:
				</Typography>
				<TableContainer>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell style={styles.tableCell}>Vertex</TableCell>
								<TableCell style={styles.tableCell}>Degree</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{
								Object.keys(vertexDegrees)
									.sort()
									.map(key => (
										<TableRow>
											<TableCell style={styles.tableCell}>{key}</TableCell>
											<TableCell style={styles.tableCell}>{vertexDegrees[key]}</TableCell>
										</TableRow>
									))
							}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
