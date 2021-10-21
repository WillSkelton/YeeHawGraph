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

export function Editor(props) {
	const { vertexSet } = props;

	const vertices = Object.keys(vertexSet);

	return (
		<TableContainer component={Paper}>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>
							<Tooltip placement="right" title="Click to Add Vertex">
								<IconButton>
									<AddSharp />
								</IconButton>
							</Tooltip>
						</TableCell>
						{
							vertices.map(vertex => {
								console.log(vertex);
								return (
									<TableCell>
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
								<TableCell>
									{vertex}
								</TableCell>
								{
									vertexSet[vertex].map(item => (
										<TableCell>
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
