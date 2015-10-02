'use strict';

angular.module('feApp')
  .controller('AssignmentCtrl', function ($scope) {
    $scope.fes = [
        {
            'fe': 1,
            'who': 'vrocha',
            'ticket': 'D-03177',
            'date': '2015-09-21',
            'release_date': '',
            'notes': ''
        },
        {
            'fe': 2,
            'who': 'jrobinson',
            'ticket': 'D-03324',
            'date': '2015-09-23',
            'release_date': '',
            'notes': ''
        },
        {
            'fe': 8,
            'who': 'alan',
            'ticket': 'B-08857',
            'date': '2015-09-11',
            'release_date': '',
            'notes': ''
        },
        {
            'fe': 9,
            'who': 'khsmith',
            'ticket': 'B-06729',
            'date': '2015-08-24',
            'release_date': '',
            'notes': 'Targeted Messaging'
        },
        {
            'fe': 10,
            'who': 'maysan',
            'ticket': 'B-09838 and D-03161',
            'date': '2015-09-18',
            'release_date': '',
            'notes': ''
        }
    ];
  });
