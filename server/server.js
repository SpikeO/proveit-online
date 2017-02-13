import express from 'express';
import path from 'path';
import cookie from 'react-cookie';
import config from 'config';
import mongoose from 'mongoose';

// Setup MongoDB connection
mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.dbname}`);

// Start Express
const app = express();
app.use(express.static(`${__dirname}/public`));

const host = config.server.host;
const port = config.server.port;
app.listen(port, () => {
  console.log('App listening at http://%s:%s', host, port);
});

app.use('/get', (req, res) => {
  cookie.plugToRequest(req, res);
});

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});
