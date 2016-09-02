window.app.controller('GridController', ['$scope','$rootScope','$location','Upload',
    function($scope, $rootScope, $location, Upload){

        $scope.gridDataObject = [];

        for(var i = 0; i < 50; i++){
            $scope.gridDataObject.push({
               'id': i+1,
                'name': 'Test ' + (i+1),
                'lastName': 'Last Name Test ' + (i+1),
                'active': true
            });
        }

        $scope.gridOptions = {
            enableFiltering: true,
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            columnDefs: [
                {name: 'id'},
                {name: 'name'},
                {name: 'lastName'},
                {name: 'active'}
            ],
            data: $scope.gridDataObject
        };

}]);