window.app.controller('CalendarController', [
    '$scope',
    '$rootScope',
    '$location',
    'Upload',
    '$compile',
    'uiCalendarConfig',
    '$timeout',
    function ($scope, $rootScope, $location, Upload, $compile, uiCalendarConfig, $timeout) {

        $scope.dataEvents = {
            events: [
                {
                    title: 'Event1',
                    start: '2016-09-04',
                    end: '2016-09-07'
                },
                {
                    title: 'Event2',
                    start: '2016-09-07T12:30:00',
                    allDay: false
                }
            ],
            color: 'blue',
            textColor: 'black'
        };

        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: 'month agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                lang: 'pt-br',
                eventClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };

    }]);