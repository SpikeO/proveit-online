import express from 'express';
import path from 'path';
import cookie from 'react-cookie';
import config from 'config';
// MongoDB Schema
import { UserModel } from './schemas';

const app = express();

app.use(express.static(`${__dirname}/public`));

app.use('/get', (req, res) => {
  cookie.plugToRequest(req, res);
});

const host = config.server.host;
const port = config.server.port;
app.listen(port, () => {
  console.log('App listening at http://%s:%s', host, port);
});

app.get('/mongo', (req, res) => {
  UserModel.find((err, doc) => res.send(doc));
});

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});
