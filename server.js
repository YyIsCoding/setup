var path = require('path');
var express = require('express');
var webpack = require('webpack');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var app = express();
var complier = webpack(config);
var port = 3000;
app.use(WebpackDevMiddleware(complier,{
  quiet: true,
  noInfo: true,
  publicPath: 'http://127.0.0.1:3000/'
}));

app.use(WebpackHotMiddleware(complier));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "/app/component/index.html"));
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
