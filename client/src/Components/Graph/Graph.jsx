import React, { useEffect, useState } from 'react';

import ReactFlow, {
	// removeElements,
	// addEdge,
	MiniMap,
	Controls,
	Background,
	ReactFlowProvider,
	useZoomPanHelper,
} from 'react-flow-renderer';
import { Colors } from '../../Styles/Colors';

import { NodeTypes } from './NodeTypes';

export function Graph(props) {
	const { elements, showMinimap } = props;
	const onElementsRemove = () => { };
	const onConnect = () => { };

	const [flowInstance, setFlowInstance] = useState(undefined);

	// const { fitBounds } = useZoomPanHelper();

	const onLoad = reactFlowInstance => {
		reactFlowInstance.fitView();
		setFlowInstance(reactFlowInstance);
	};

	useEffect(() => {
		// eslint-disable-next-line no-unused-expressions
		flowInstance && flowInstance.fitView();
	}, [elements, flowInstance]);

	return (
		<ReactFlowProvider>
			<ReactFlow
				elements={elements}
				nodeTypes={NodeTypes}
				onElementsRemove={onElementsRemove}
				onConnect={onConnect}
				onLoad={onLoad}
				snapToGrid
				snapGrid={[15, 15]}>
				{
					showMinimap && (
						<MiniMap
							style={{ backgroundColor: 'black' }}
							nodeStrokeColor={n => {
								if (n.style?.background) {
									return n.style.background;
								}
								if (n.type === 'input') {
									return '#0041d0';
								}
								if (n.type === 'output') {
									return '#ff0072';
								}
								if (n.type === 'default') {
									return '#1a192b';
								}
								if (n.type === 'circle') {
									return n.data.color || 'black';
								}

								return '#eee';
							}}
							nodeColor={n => {
								if (n.style?.background) {
									return n.style.background;
								}
								if (n.type === 'circle') {
									return n.data.color || Colors.slate;
								}

								return '#fff';
							}}
							nodeBorderRadius={2} />
					)
				}
				<Controls />
				<Background color="#aaa" gap={16} />
			</ReactFlow>
		</ReactFlowProvider>
	);
}
