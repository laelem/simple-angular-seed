'use strict'

angular.module('myApp',[
  'ui.router','pascalprecht.translate',
  'myApp.controllers','myApp.directives','myApp.filters','myApp.services',
  'myApp.myModule'
])

.config(['$translateProvider','$translatePartialLoaderProvider',
function($translateProvider,$translatePartialLoaderProvider){
  $translatePartialLoaderProvider.addPart('../lang');
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '{part}/{lang}.json'
  });
  $translateProvider.preferredLanguage('fr');
  $translateProvider.useLoaderCache(true);
}])

.run(['$state','$rootScope','$translate',
function($state,$rootScope,$translate){
  $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
    $translate.refresh();
  });

  $state.go('index');
}]);