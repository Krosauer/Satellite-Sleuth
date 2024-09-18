import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Game from './Game.jsx';

function App() {
	
	return(

		<Router>
      		<Routes>
        		<Route path="/" element={<Home />} />
        		<Route path="/game" element={<Game />} />
      		</Routes>
    	</Router>
	);
}

export default App
