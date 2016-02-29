'use strict';

var app = angular.module('tcc', ['ui.router', 'ngMaterial', 'ngMessages']);

app.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('light-blue').accentPalette('orange');

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', { url: '/', templateUrl: '/public/templates/home.html', controller: 'homeCtrl' });
});
'use strict';

app.controller('homeCtrl', function ($scope, $mdDialog, $state, api) {

  $scope.years = api.years();
  $scope.configs = api.configs();
  $scope.models = api.models();
  $scope.makes = api.makes();

  $scope.submit = function (appt) {
    // create appointment object
    var appointment = {
      'make': appt.make,
      'year': appt.year,
      'model': appt.model,
      'config': appt.config || 'Not Sure',
      'mileage': appt.mileage || 'n/a',
      'notes': appt.notes || 'n/a'
    };

    var confirm = $mdDialog.confirm().clickOutsideToClose(false).title('Success!').textContent('Thank you for scheduling an apointment.').ok('Confirm!').cancel('Cancel');

    $mdDialog.show(confirm).then(function () {
      console.log(appointment);
      $state.reload();
    }, function () {
      return console.error('Error, you did not successfully schedule an appointment');
    });
  };
});
'use strict';

app.service('api', function () {

  this.configs = function () {
    return ['Config A', 'Config B', 'Config C', 'Not Sure'];
  };
  this.models = function () {
    return ['Model A', 'Model B', 'Model C'];
  };
  this.makes = function () {
    return ["AM General", "Acura", "Alfa Romeo", "Aston Martin", "Audi", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Daewoo", "Dodge", "Eagle", "FIAT", "Ferrari", "Fisker", "Ford", "GMC", "Genesis", "Geo", "HUMMER", "Honda", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus", "MINI", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Panoz", "Plymouth", "Pontiac", "Porsche", "Ram", "Rolls-Royce", "Saab", "Saturn", "Scion", "Smart", "Spyker", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"];
  };

  this.years = function () {
    return getYears();
  };

  function getYears() {
    var years = [];
    for (var i = 2016; i >= 1985; i--) {
      years.push(i);
    }
    return years;
  }
});