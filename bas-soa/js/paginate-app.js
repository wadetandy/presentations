//= require jquery/jquery
//= require jquery.scrollTo/jquery.scrollTo
//= require angular
//= require underscore/underscore
//= require bb-paginate

app = angular.module('app', ['bbPaginate']);

app.controller('myCtrl', ['$scope', function($scope) {

  $scope.selectPage = function(pageNumber) {
    $scope.search.meta.pagination.current_page = pageNumber
  }

  $scope.selectFivePage = function(pageNumber) {
    $scope.fivepage.current_page = pageNumber
  }

  $scope.selectThreePage = function(pageNumber) {
    $scope.threepage.current_page = pageNumber
  }

  $scope.selectTerminalPage = function(pageNumber) {
    $scope.terminalPage.current_page = pageNumber
  }

  $scope.search = {
    meta: {
      pagination: {
        total_entries: 200,
        current_page: 3,
        per_page: 5
      }
    }
  }

  $scope.fivepage = {
    total_entries: 25,
    current_page: 3,
    per_page: 5
  }

  $scope.threepage = {
    total_entries: 14,
    current_page: 2,
    per_page: 5
  }

  $scope.terminal = {
    total_entries: 20,
    current_page: 2,
    per_page: 5
  }

}]);
