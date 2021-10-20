import React from 'react';
import Graph from './Components/Graph/Graph';

document.getElementById('body').style.margin = '0px';

export function App() {
	return (
		<div className="App" style={{ width: '100vw', height: '100vh', backgroundColor: '#222' }}>
			<Graph />
		</div>
	);
}
