angular.module('myApp.myModule',['myApp.myModule.controllers','myApp.myModule.directives','myApp.myModule.services','myApp.myModule.filters']);

angular.module('myApp.myModule').config(['$stateProvider',function($stateProvider){
    $stateProvider.state('index',{
        url:'/my-route',
        controller: 'IndexController',
        templateUrl:'modules/myModule/views/index.html'
    });
}])
