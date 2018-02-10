'use strict'

const express = require('express');
const webpack = require('webpack');
var portfinder = require('portfinder');
const webpackConfig = require('./webpack.dev.config');

require('dotenv').config();

const app = express();

const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  quiet: true,
  
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 10000
});

app.use(hotMiddleware);
app.use(devMiddleware);

var server;
var _resolve;
var _reject;
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve;
  _reject = reject;
})

const port = process.env.NODE_APP_PORT || 3000;
portfinder.basePort = port;

const uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(() => {
	portfinder.getPort((err, port) => {
    	if (err) {
    	  _reject(err);
    	}
    	process.env.NODE_APP_PORT = port;
    	var uri = 'http://localhost:' + port;
    	console.log('> Listening at ' + uri + '\n');
    	// when env is testing, don't need open it
    
    	server = app.listen(port);
    	_resolve();
  	})
})


module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
