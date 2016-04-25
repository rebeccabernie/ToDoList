angular
  
.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  //Abstract State
  .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
  })

  //History Stacks

//Add Tab State
  .state('tab.add', {
        url: '/add',
        views: {
          'tab-add': {
            templateUrl: 'templates/tab-add.html',
            controller: 'AddCtrl'
            }
        }
  })

  //Upcoming Tab State
  .state('tab.upcoming', {
        url: '/upcoming',
        views: {
          'tab-upcoming': {
            templateUrl: 'templates/tab-upcoming.html',
            controller: 'UpcomingCtrl'
            }
        }
  });

  //Default Tab
  $urlRouterProvider.otherwise('/tab/upcoming');

});
