'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/home',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('Content', {
    url: '/web-se/:category/:title',
    controller: 'ContentCtrl as content',
    templateUrl: 'content.html',
    title: 'Content'
  });

  $urlRouterProvider.otherwise('/web-se/film/action');

}

module.exports = OnConfig;