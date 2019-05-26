const webpackHotMiddlewareClient = require('webpack-hot-middleware/client?reload=true');

webpackHotMiddlewareClient.subscribe(function(payload) {
  if (payload.action === 'reload' || payload.reload) {
    window.location.reload();
  }
});

module.exports = webpackHotMiddlewareClient;
