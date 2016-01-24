'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function TrailerService($resource) {
  return $resource('http://localhost:8080/:imdbId');
}

servicesModule.service('TrailerService', TrailerService);