/*global angular */

'use strict';

describe('Unit: ContentCtrl', function() {

  var ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(function($controller) {
      ctrl = $controller('ContentCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

});