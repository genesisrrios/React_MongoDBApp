import express from 'express';
import config from './config';
import api from './api/index';

const server = express();

server.use(express.static('public'));
server.use('/api', api);

server.set('view engine', 'ejs');
import serverRender from './serverRender';

server.get('/', (req, res) => {
	serverRender()
	.then(content => {
		res.render('index', { content: content});
	})
	.catch(function (error) {
		console.error;
		console.log(error)
	});
})

server.get('/about.html', (req, res)=>{
	res.send('hello express');
})

server.listen(config.port, config.host, () => {
	console.info('Express listening on port', config.port);
})