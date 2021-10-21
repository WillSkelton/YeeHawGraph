export const customElements = [
	{
		id: '1',
		type: 'circle',
		position: { x: 100, y: 100 },
		data: {
			label: 'Yee',
			diameter: '100px',
			selfLoop: true,
		},
	},
	{
		id: '2',
		type: 'circle',
		position: { x: 500, y: 500 },
		data: {
			label: 'Haw',
			diameter: '100px',
		},
	},
	{
		id: 'e1-2',
		source: '1',
		target: '2',
		sourceHandle: 'c',
		targetHandle: 'd',
		type: 'straight',
		animated: true,
	},
	{
		id: 'e1-2',
		source: '2',
		target: '1',
		sourceHandle: 'c',
		targetHandle: 'd',
		type: 'straight',
		animated: true,
	},
];

export function GenerateNodes(vertexSet) {
	const vertices = Object.keys(vertexSet);

	const nodes = [];
	const edges = [];

	vertices.forEach((vertexName, rowNumber) => {
		const node = {
			id: vertexName,
			type: 'circle',
			position: { x: 500, y: 100 * rowNumber },
			data: {
				label: vertexName,
				selfLoop: false,
			},
		};

		nodes.push(node);

		vertexSet[vertexName].forEach((matrixElement, columnNumber) => {
			if (columnNumber === rowNumber) {
				node.data.selfLoop = true;
			}
			if (matrixElement !== 1) {
				return;
			}

			const adjacentVertexName = vertices[columnNumber];

			const edge = {
				id: `e${vertexName}-${adjacentVertexName}`,
				source: `${vertexName}`,
				target: `${adjacentVertexName}`,
				sourceHandle: 'c',
				targetHandle: 'd',
				type: 'straight',
				animated: true,
			};

			edges.push(edge);
		});
	});

	return [
		...nodes,
		...edges,
	];
}
