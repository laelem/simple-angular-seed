'use strict'

angular.module('myApp',[
  'ui.router',
  'myApp.controllers','myApp.directives','myApp.filters','myApp.services',
  'myApp.myModule'
])

.run(['$state',
function($state){
  $state.go('index');
}]);