'use strict';

app.controller('homeCtrl', function ($scope, $mdDialog, $state) {

  $scope.years = getYears();
  $scope.configs = ['Config A', 'Config B', 'Config C', 'Not Sure']
  $scope.models = ['Model A', 'Model B', 'Model C'];
  $scope.makes = ["AM General", "Acura", "Alfa Romeo", "Aston Martin", "Audi", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Daewoo", "Dodge", "Eagle", "FIAT", "Ferrari", "Fisker", "Ford", "GMC", "Genesis", "Geo", "HUMMER", "Honda", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus", "MINI", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Panoz", "Plymouth", "Pontiac", "Porsche", "Ram", "Rolls-Royce", "Saab", "Saturn", "Scion", "Smart", "Spyker", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"];

  function getYears() {
    let years = [];
    for (let i = 2016; i >= 1985; i--) {
      years.push(i);
    }
    return years;
  }

  $scope.submit = (appt) => {
    // create appointment object
    let appointment = {
      'make': appt.make,
      'year': appt.year,
      'model': appt.model,
      'config': appt.config || 'Not Sure',
      'mileage': appt.mileage || 'n/a',
      'notes': appt.notes || 'n/a'
    };

    let confirm = $mdDialog.confirm()
      .clickOutsideToClose(false)
      .title('Success!')
      .textContent('Thank you for scheduling an apointment.')
      .ok('Confirm!')
      .cancel('Cancel');

    $mdDialog.show(confirm).then( () => {
      console.log(appointment);
      $state.reload();
    }, () => console.error('Error, you did not successfully schedule an appointment'));
  };

});
