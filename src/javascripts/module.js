var app = angular.module('tcc', ['ui.router', 'ngMaterial', 'ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('light-blue')
  .accentPalette('orange');

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', { url: '/', templateUrl: './public/templates/home.html', controller: 'homeCtrl' })
}]);
