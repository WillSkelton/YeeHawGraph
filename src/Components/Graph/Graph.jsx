import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
	{
		id: '1',
		// you can also pass a React component as a label
		data: { label: 'Node 1' },
		position: { x: 0, y: 0 },
	},
	{
		id: '2',
		// you can also pass a React component as a label
		data: { label: 'Node 2' },
		position: { x: 250, y: 0 },
	},
	{
		id: '3',
		// you can also pass a React component as a label
		data: { label: 'Node 3' },
		position: { x: 0, y: 250 },
	},
	{
		id: '4',
		// you can also pass a React component as a label
		data: { label: 'Node 4' },
		position: { x: 250, y: 250 },
	},

	// animated edge
	{ id: 'e1-1', source: '1', target: '1', animated: true },
	// { id: 'e1-2', source: '2', target: '1', animated: true },
	// { id: 'e1-2', source: '1', target: '2', animated: true },
	// { id: 'e2-3', source: '2', target: '3', animated: true },
	// { id: 'e3-4', source: '3', target: '4', animated: true },
	// { id: 'e4-1', source: '4', target: '1', animated: true },
];

export function Graph() {
	return (
		<div style={{ height: 500 }}>
			<ReactFlow elements={elements} />
		</div>
	);
}
