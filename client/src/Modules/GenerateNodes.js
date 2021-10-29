const r = 500;

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

export function getCoords(theta) {
	const radians = (theta * Math.PI) / 180;
	const x = r * (Math.cos(radians));
	const y = r * (Math.sin(radians));
	return [x, y];
}

export function generatePositions(nodes) {
	const numberOfNodes = nodes.length;
	const theta = 360 / numberOfNodes;

	nodes.forEach((node, index) => {
		const thetaSubI = theta * (index + 1);
		const [x, y] = getCoords(thetaSubI);

		// eslint-disable-next-line no-param-reassign
		node.position = { x, y };
	});
}

export function GenerateNodes(vertexSet) {
	const vertices = Object.keys(vertexSet);

	const nodes = [];
	const edges = [];

	vertices.forEach((vertexName, rowNumber) => {
		const node = {
			id: vertexName,
			type: 'circle',
			position: { x: 0, y: 0 },
			data: {
				label: vertexName,
				selfLoop: false,
			},
		};

		nodes.push(node);

		vertexSet[vertexName].forEach((matrixElement, columnNumber) => {
			if (columnNumber === rowNumber && matrixElement === 1) {
				node.data.selfLoop = columnNumber === rowNumber;
				return;
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

	generatePositions(nodes);

	return [
		...nodes,
		...edges,
	];
}
