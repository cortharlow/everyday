angular
  .module('everyday.controllers', [])
  
  .controller('LoginController', LoginController)

LoginController.$inject = ['$scope, $state'];

function LoginController($scope, $state) {

  var vm = this;
  vm.getUser = {};

  var authProvider = 'basic';
  var authSettings = { 'remember': true };

  var loginDetails = {
    'username': vm.getUser.username,
    'email': vm.getUser.email,
    'password': vm.getUser.password
  };

  $scope.authSuccess = function() {
    // replace dash with the name of your main state
    $state.go('dash');
  };

  $scope.authFailure = function(errors) {
    for (var err in errors) {
      // check the error and provide an appropriate message
      // for your application
    }
  };

  $scope.login = function(provider) {
    Ionic.Auth.login(authProvider, authSettings, loginDetails)
      .then(authSuccess, authFailure);
  };
};
