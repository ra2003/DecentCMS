// DecentCMS (c) 2014 Bertrand Le Roy, under MIT. See LICENSE.txt for licensing details.
'use strict';

var ExpressApp = require('../lib/express-app');

/**
 * @description
 * A route handler that delegates to Express.
 * @param {Shell} shell The shell
 * @constructor
 */
var ExpressRouteHandler = {
  feature: 'express',
  scope: 'shell',
  init: function (shell) {
    var express = require('express');
    var app = express();
    var expressApp = new ExpressApp(app);
    shell.services['express-app'] = [expressApp];
    shell.on('decent.core.shell.handle-route', function (payload) {
      if (!expressApp.locked) {
        // Register middleware now.
        shell.emit('decent.express.register-middleware', expressApp);
        expressApp.lock();
      }
      // Handle the request (using private API for  good cause)
      expressApp.app.handle(payload.request, payload.response);
    });
  }
};

module.exports = ExpressRouteHandler;