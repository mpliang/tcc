var app = angular.module('tcc', ['ui.router', 'ngMaterial', 'ngMessages']);

app.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('light-blue')
  .accentPalette('orange');

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', { url: '/', templateUrl: '/src/templates/home.html', controller: 'homeCtrl' })
})
