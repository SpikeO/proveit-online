import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import config from 'config';
import mongoose from 'mongoose';
import passport from 'passport';

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

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);
const apiRoutes = require('./routes/api');
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
