import express from 'express';
import config from './config';
import api from './api/index';

const server = express();

server.use(express.static('public'));
server.use('/api', api);

server.set('view engine', 'ejs');

server.get('/', (req, res)=>{
	res.render('index');
})

server.get('/about.html', (req, res)=>{
	res.send('hello express');
})

server.listen(config.port, () => {
	console.info('Express listening on port', config.port);
})