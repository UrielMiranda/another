(function(){
    'use strict';
    angular
        .module("lastFm")
        .controller("topTenCtrl",topTenCtrl)
        .controller("tracksCtrl",tracksCtrl);

    tracksCtrl.$inject = ["topTracks"];
    function tracksCtrl(topTracks){
        var top = this;
        top.track = null;
        top.topten = topTracks.get()
            .$promise.then(function(data){
                top.track = data.tracks.track;
            });
    }

    topTenCtrl.$inject = ["artistLastFm"];
    function topTenCtrl(artistLastFm){
        var artist = this;
        artist.track = null;
        artist.topten = artistLastFm.get()
            .$promise.then(function(data){
                artist.track = data.artists.artist;
                console.log(artist.track);
            });
    }
})();