import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import axios from 'axios';

axios.get('/api/contests')
	.then(resp => {
		ReactDom.render(
			<App initialContests={resp.data.contests}/>,
			document.getElementById('root')
		);
	})
	.catch(console.error)

