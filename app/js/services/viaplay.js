'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function ViaplayService($resource) {
  return $resource('https://content.viaplay.se/web-se/:category/:title');
}

servicesModule.service('ViaplayService', ViaplayService);