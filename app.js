(function(){
  'use strict';

  angular
  .module("lastFm",["ngResource"])
  .controller("topTenCtrl",topTenCtrl)
  .controller("tracksCtrl",tracksCtrl)
  .factory("topTracks",topTracks)´´
  .factory("artistLastFm",artistLastFm);

  artistLastFm.$inject = ["$resource"];
  function artistLastFm($resource){
    return $resource("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=1ea476011a970d4658b7ae3a85170d36&format=json");
  }

  topTracks.$inject = ["$resource"];
  function topTracks($resource){
    return $resource("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=1ea476011a970d4658b7ae3a85170d36&format=json");
  }


  topTenCtrl.$inject = ["artistLastFm"];
  function topTenCtrl(artistLastFm){
    var artist = this;
    artist.track = null;
    artist.topten = artistLastFm.get()
    .$promise.then(function(data){
      artist.track = data.artists.artist;
    });
  }

  tracksCtrl.$inject = ["topTracks"];
    function tracksCtrl(topTracks){
      var top = this;
      top.track = null;
      top.topten = topTracks.get()
      .$promise.then(function(data){
        top.track = data.tracks.track;
      });
    }
})();
