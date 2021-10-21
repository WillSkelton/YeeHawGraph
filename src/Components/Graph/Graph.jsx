import React, { useState } from 'react';

import ReactFlow, {
	removeElements,
	addEdge,
	MiniMap,
	Controls,
	Background,
} from 'react-flow-renderer';

import initialElements from './initial-elements';
import { NodeTypes } from './NodeTypes';

const onLoad = reactFlowInstance => {
	console.log('flow loaded:', reactFlowInstance);
	reactFlowInstance.fitView();
};

export function BasicFlow() {
	const [elements, setElements] = useState(initialElements);
	const onElementsRemove = elementsToRemove => setElements(els => removeElements(elementsToRemove, els));
	const onConnect = params => setElements(els => addEdge(params, els));

	return (
		<ReactFlow
			elements={elements}
			onElementsRemove={onElementsRemove}
			onConnect={onConnect}
			onLoad={onLoad}
			snapToGrid
			snapGrid={[15, 15]}>
			<MiniMap
				nodeStrokeColor={n => {
					if (n.style?.background) return n.style.background;
					if (n.type === 'input') return '#0041d0';
					if (n.type === 'output') return '#ff0072';
					if (n.type === 'default') return '#1a192b';

					return '#eee';
				}}
				nodeColor={n => {
					if (n.style?.background) return n.style.background;

					return '#fff';
				}}
				nodeBorderRadius={2} />
			<Controls />
			<Background color="#aaa" gap={16} />
		</ReactFlow>
	);
}

const customElements = [
	{
		id: '1',
		type: 'circle',
		position: { x: 100, y: 100 },
		data: {
			label: 'Yeet',
			diameter: '100px',
		},
	},
];

export function CustomFlow() {
	const onElementsRemove = () => { };
	const onConnect = () => { };
	return (
		<ReactFlow
			elements={customElements}
			nodeTypes={NodeTypes}
			onElementsRemove={onElementsRemove}
			onConnect={onConnect}
			onLoad={onLoad}
			snapToGrid
			snapGrid={[15, 15]}>
			<MiniMap
				nodeStrokeColor={n => {
					if (n.style?.background) return n.style.background;
					if (n.type === 'input') return '#0041d0';
					if (n.type === 'output') return '#ff0072';
					if (n.type === 'default') return '#1a192b';

					return '#eee';
				}}
				nodeColor={n => {
					if (n.style?.background) return n.style.background;

					return '#fff';
				}}
				nodeBorderRadius={2} />
			<Controls />
			<Background color="#aaa" gap={16} />
		</ReactFlow>
	);
}
