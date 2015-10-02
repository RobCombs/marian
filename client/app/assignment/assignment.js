'use strict';

angular.module('feApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('assignment', {
        url: '/assignment',
        templateUrl: 'app/assignment/assignment.html',
        controller: 'AssignmentCtrl'
      });
  });