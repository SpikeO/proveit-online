import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import config from 'config';
import mongoose from 'mongoose';
import passport from 'passport';
import createRoutes from './routes';

// Setup MongoDB connection
mongoose.Promise = global.Promise;
const mongooseOptions = { promiseLibrary: require('bluebird') };
mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.dbname}`, mongooseOptions);
// plug in the promise library:
mongoose.Promise = global.Promise;

// Start Express
const app = express();
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

const host = config.server.host;
const port = config.server.port;
app.listen(port, () => {
  console.log('App listening at http://%s:%s', host, port);
});

// createRoutes(app, path.join(__dirname, 'routes'));

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});
