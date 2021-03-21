(function(){
    'use strict';

    angular.module('mainApp.attendance', [])
            .config(config);

    function config($stateProvider){

        $stateProvider
            .state('main.attendance', {
                url: 'attendance',
                template:
                '<div ui-view>'+
                    '<button ng-click="mainCtrl.parentBack()">Back</button><br><br>'+
                    '<select ng-model="mainCtrl.user.loggedBy" required>'+
                        '<option value="">--Select Employee--</option>'+
                        '<option ng-repeat="user in mainCtrl.users">{{user.name}}</option>'+
                    '</select> '+
                    '<a ui-sref="main.attendance.create"><button ng-click="mainCtrl.checkIn()">Check In</button></a> '+
                    '<a ui-sref="main.attendance.view"><button>View Records</button></a>'+
                '</div>',
                controller: 'AttendanceController',
                controllerAs: 'mainCtrl'
            })
            .state('main.attendance.create', {
                url: '/create',
                template:
                '<button ng-click="createCtrl.childBack()">Back</button><br><br> '+
                'Checked In',
                controller: 'AttendanceController',
                controllerAs: 'createCtrl'

            })
            .state('main.attendance.view', {
                url: '/view',
                template:
                '<button ng-click="viewCtrl.parentBack()">Back</button><br><br>'+
                '<div ui-view>'+
                    '<table>'+
                        '<tr>'+
                            '<th>Id</th>'+
                            '<th>Logged Time</th>'+
                            '<th>Logged By</th>'+
                        '</tr>'+
                        '<tr ng-repeat="time in viewCtrl.loggedData">'+
                            '<td>{{time.id}}</td>'+
                            '<td>{{time.loggedTime}}</td>'+
                            '<td>{{time.loggedBy}}</td>'+
                        '</tr>'+
                    '</table>'+
                '</div>'
                ,
                controller: 'AttendanceController',
                controllerAs: 'viewCtrl'
            })
    };
})();