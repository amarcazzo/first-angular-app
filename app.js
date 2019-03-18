// Initializing
var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){

// $scope.functionName = function(){}

    $scope.toggleSidenav = function(menuId){
        $mdSidenav(menuId).toggle();
    };

/*  JSON format (javascript object notation)
    [
        {
            attribute: value,
            attribute: value
        }
    ]
*/
    $scope.menu = [
        {
            link: '',
            title: 'Home',
            icon: 'dashboard'
        },
        {
            link: '',
            title: 'Messages',
            icon: 'message'
        },
    ];

    $scope.config = [
        {
            link: '',
            title: 'My profile',
            icon: 'settings'
        }
    ];

    $scope.messages = [
        {
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            autor: 'Ayrton Marcazzo',
            fecha: new Date().toDateString(),
            titulo: 'Lorem ipsum'
        }
    ];

    $scope.showSearch = false;

    $scope.showListBottomSheet = function($event){
        $mdBottomSheet.show({
            template: document.getElementById('bottom-sheet-list').innerHTML,
            // templateUrl: "./bottom-sheet-list.html", // Works only with webserver
            controller: "ListBottomSheetCtrl",
            targetEvent: $event
        });
    };

    $scope.showAdd = function($event){
        $mdDialog.show({
            template: document.getElementById('pop-up-dialog').innerHTML,
            controller: "DialogCtrl",
            targetEvent: $event,
            parent: angular.element(document.body)
        });
    };
}]);

app.controller('ListBottomSheetCtrl', ['$scope', function($scope){
    
    $scope.items = [
        { name: 'Home', icon: 'dashboard' },
        { name: 'Posts', icon: 'message' },
        { name: 'Activities', icon: 'message' },
        { name: 'My profile', icon: 'settings' }
    ];

    // In progress
    // $scope.goToTab = function(tab){
    //     document.getElementById('')
    // };

}]);

app.directive('userAvatar', function(){
    return {
        replace: true,
        template: document.getElementById('user-avatar').innerHTML
    };
});

app.controller('DialogCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog){
    
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.confirm = function(){
        //Register in database
    };

}]);