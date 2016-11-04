/**
 * Created by urielmiranda on 04/11/16.
 */
(function(){
    'use strict';

    var topTen = {
        templateUrl : "./components/top.html",
        controller: topCtrl
    };

    angular
        .module("lastFm")
        .component("topTen",topTen);

    topCtrl.$inject = ["artistLastFm","topTracks"];
    function topCtrl(artistLastFm, topTracks){
        var top = this;
        top.track = null;
        top.artist =null;

        top.topArtist = artistLastFm.get()
            .$promise.then(function(data){
                top.artist = data.artists.artist;
            });

        top.topTracks = topTracks.get()
            .$promise.then(function(data){
                top.track = data.tracks.track;
            });
    }

})();
