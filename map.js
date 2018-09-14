
var map = L.map('map');

// create the tile layer with correct attribution
// var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
// var osm = new L.TileLayer( osmUrl );

L.tileLayer('https://tile.livemap24.com/dark/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

L.control.geocoder('search-fljxAAA').addTo(map);

// start the map in South-East England
map.setView( new L.LatLng( 51.5072, 0.1275 ), 0 );

$(document).ready(function() {
  $('#buttons button').on('click', function(event) {
    $('#buttons button').removeClass('active');
    $(event.target).addClass('active');
    changeHashFunction( event.target.id );
  });
});
