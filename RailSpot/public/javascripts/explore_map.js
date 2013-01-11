(function() {
  var map, spots_longboard, spots_skate, start_add_spot;

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

  map = L.map('explore_map').setView([40, 2], 5);

  L.tileLayer('http://{s}.tiles.mapbox.com/v3/jgbas67.map-ayqdih62/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; Some attributions',
    maxZoom: 18
  }).addTo(map);

  $(function() {
    $('#explore_map').css('height', $(window).height() - 120);
    $(window).resize(function() {
      $('#explore_map').css('height', $(window).height() - 120);
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
    $('.leaflet-control-container div').removeClass('leaflet-left').addClass('leaflet-right');
    L.marker([40, -6], {
      title: 'Random one'
    }).bindPopup('<b>Random one</b><br/><a href="/spots/2">Ver más</a>').addTo(map);
    $('#add_spot_btn').click(function() {
      event.preventDefault();
      start_add_spot();
    });
    $('#create_spot').click(function() {
      $('#add_form').hide();
      $('#filters').show();
      $('#message_wrapper span').html('Spot added!');
      $('#message_wrapper').show().delay(3000).fadeOut();
    });
  });

  start_add_spot = function() {
    $('#map_controls #filters').hide();
    $('#add_form').show();
    $('form#add_spot').hide();
    map.on('click', function(e) {
      $('form#add_spot').show();
      $('#add_spot .lng').html(e.latlng.lng.toFixed(2));
      $('#add_spot .lat').html(e.latlng.lat.toFixed(2));
      $('#add_form .message').html('Just some details...');
      console.log(e.latlng);
    });
  };

}).call(this);
