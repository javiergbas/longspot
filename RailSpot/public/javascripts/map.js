(function() {
  var spots_longboard, spots_skate;

  spots_longboard = [
    {
      name: 'Spot en Mallorca',
      lng: '2.9',
      lat: '39.6'
    }, {
      name: 'Otro Spot',
      lng: '1.4',
      lat: '41.6'
    }
  ];

  spots_skate = [
    {
      name: 'Spot en Mallorca',
      lng: '1',
      lat: '40'
    }, {
      name: 'Otro Spot',
      lng: '2.4',
      lat: '37'
    }
  ];

  $(function() {
    var i, map, _i, _len;
    $('#map').css('height', $(window).height() - 140);
    $(window).resize(function() {
      $('#map').css('height', $(window).height() - 140);
    });
    $('#map_controls #show_arrow').click(function() {
      if ($('#map_controls').hasClass('minimized')) {
        event.preventDefault();
        $('#map_controls').removeClass('minimized');
        $('#map_controls #show_arrow span').removeClass('icon-chevron-right').addClass('icon-chevron-left');
      } else {
        $('#map_controls').addClass('minimized');
        $('#map_controls #show_arrow span').removeClass('icon-chevron-left').addClass('icon-chevron-right');
      }
    });
    map = L.map('map').setView([40, 2], 5);
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/jgbas67.map-ayqdih62/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; Some attributions',
      maxZoom: 18
    }).addTo(map);
    for (_i = 0, _len = spots_longboard.length; _i < _len; _i++) {
      i = spots_longboard[_i];
      console.log('hi');
    }
    L.marker([40, -6], {
      title: 'Random one'
    }).bindPopup('<b>Random one</b><br/><a href="/spots/2">Ver más</a>').addTo(map);
  });

}).call(this);
