import React from 'react';
import { Typography } from '@mui/material';
import { Colors } from '../../Styles';

export function Stats(props) {
	const { elements } = props;

	console.log(elements);

	const vertices = [];
	const edges = [];

	let selfLoops = 0;

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

	return (
		<div>
			<Typography variant="h3" style={{ color: Colors.white }}>Stats:</Typography>
			<Typography style={{ color: Colors.white }}>{`Number of Vertices (n): ${vertices.length}`}</Typography>
			<Typography style={{ color: Colors.white }}>{`Number of Edges (m): ${edges.length}`}</Typography>
			<Typography style={{ color: Colors.white }}>{`Self Loops: ${selfLoops}`}</Typography>
		</div>
	);
}
