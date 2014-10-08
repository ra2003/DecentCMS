// DecentCMS (c) 2014 Bertrand Le Roy, under MIT license. See license.txt for licensing details.
'use strict';
var fs = require('fs');
var path = require('path');
var t = require('../../localization/lib/t');

var availableModules = {};

/**
 * @description
 * Discovers modules under the paths passed as parameters. If no parameter is
 * passed in, the search is performed under /modules.
 */
function discover() {
  Array.prototype.forEach.call(
    (arguments.length === 0 ? ['./modules'] : arguments),
    function(rootPath) {
      console.log(t('Discovering module areas in %s', rootPath));
      var areaPaths = fs.readdirSync(rootPath).map(function(subPath) {
        return path.resolve(rootPath, subPath);
      });
      areaPaths.forEach(function (areaPath) {
        console.log(t('Discovering modules in %s', areaPath));
        var pathStats = fs.statSync(areaPath);
        if (!pathStats.isFile()) {
          var modulePaths = fs.readdirSync(areaPath).map(function(subPath) {
            return path.join(areaPath, subPath);
          });
          modulePaths.forEach(function(modulePath) {
            var manifestPath = path.join(modulePath, 'package.json');
            try {
              var manifest = require(manifestPath);
              console.log(t('Loaded module %s', modulePath));
              availableModules[modulePath] = manifest;
            }
            catch(ex) {
              ex.path = manifestPath;
              ex.message = t('Failed to load %s.', manifestPath);
              throw ex;
            }
          });
        }
      });
    });
}

module.exports = {
  discover: discover,
  modules: availableModules
};