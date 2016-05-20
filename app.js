(function(){
  'use strict';

  var topTen = {
    templateUrl : "./assets/partials/top.html"
  }

  angular
  .module("lastFm",["ngResource"])
      .component("topTen",topTen);

})();
