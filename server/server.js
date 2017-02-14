import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import config from 'config';
import mongoose from 'mongoose';
import createRoutes from './routes';

// Setup MongoDB connection
mongoose.Promise = global.Promise;
const mongooseOptions = { promiseLibrary: require('bluebird') };
mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.dbname}`, mongooseOptions);

// Start Express
const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

const host = config.server.host;
const port = config.server.port;
app.listen(port, () => {
  console.log('App listening at http://%s:%s', host, port);
});

createRoutes(app, path.join(__dirname, 'routes'));

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});
