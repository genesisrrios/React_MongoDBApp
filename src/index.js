import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
const json = require('./testData.json');

ReactDom.render(
	<App contests={json.contests} />,
	document.getElementById('root')
);