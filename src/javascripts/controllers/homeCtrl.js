'use strict';

app.controller('homeCtrl', ['$scope', '$mdDialog', '$state', 'api', function($scope, $mdDialog, $state, api) {

  $scope.years = api.years();
  $scope.configs = api.configs();
  $scope.models = api.models();
  $scope.makes = api.makes();

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

}]);
