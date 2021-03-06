// DecentCMS (c) 2015 Bertrand Le Roy, under MIT. See LICENSE.txt for licensing details.
'use strict';

/**
 * @description
 * This handler registers itself as an Express middleware that handles
 * a catchall route under /docs/* with a normal priority, for documentation
 * content items.
 */
var DocumentationRouteHandler = {
  service: 'middleware',
  feature: 'documentation',
  routePriority: 10,
  scope: 'shell',
  /**
   * Registers the documentation middleware.
   * @param {object} scope The scope.
   * @param {object} context The context.
   * @param {object} context.expressApp The Express application object.
   */
  register: function registerDocumentationMiddleware(scope, context) {
    context.expressApp.register(DocumentationRouteHandler.routePriority, function bindDocumentationMiddleware(app) {
      app.get('/docs(/*)?', function documentationMiddleware(request, response, next) {
        if (request.routed) {next();return;}
        var contentRenderer = request.require('renderer');
        if (!contentRenderer) {next();return;}
        contentRenderer.promiseToRender({
          request: request,
          id: 'docs:' + request.path.substr(6),
          displayType: 'main',
          place: 'main:1'
        });
        request.routed = true;
        next();
      });
    });
  },
  /**
   * Gets the URL for a documentation topic (id prefix 'docs:').
   * @param {string} id The topic content item's id.
   * @returns {string} The URL for the topic.
   */
  getUrl: function getUrl(id) {
    if (id === 'docs:') return '/docs';
    if (id.substr(0, 5) === 'docs:') {
      return '/docs/' + id.substr(5);
    }
    return null;
  }
};

module.exports = DocumentationRouteHandler;