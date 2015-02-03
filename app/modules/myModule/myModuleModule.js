angular.module('myApp.myModule',[
  'myApp.myModule.controllers',
  'myApp.myModule.directives',
  'myApp.myModule.services',
  'myApp.myModule.filters'
])

.config(['$stateProvider','$translateProvider','$translatePartialLoaderProvider',
function($stateProvider,$translateProvider,$translatePartialLoaderProvider){
  $translatePartialLoaderProvider.addPart('../modules/myModule/lang');

  $stateProvider.state('index',{
    url:'/my-route',
    controller: 'IndexController',
    templateUrl:'modules/myModule/views/index.html'
  });
}])
