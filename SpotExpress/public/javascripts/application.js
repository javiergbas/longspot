
spots_longboard = [{name: 'Spot en Mallorca', lng: '2.9', lat: '39.6'},{name: 'Otro Spot', lng: '1.4', lat: '41.6'}]
spots_skate = [{name: 'Spot en Mallorca', lng: '1', lat: '40'},{name: 'Otro Spot', lng: '2.4', lat: '37'}]


$().ready(function(){

  // Initialize map
  var map = L.map('map').setView([40, 2], 5);L.tileLayer('http://{s}.tiles.mapbox.com/v3/jgbas67.map-ayqdih62/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; Some attributions',
      maxZoom: 18
  }).addTo(map);

  // Add points
  longboard_points = []
  for (var i in spots_longboard) {
    tmp = L.marker([spots_longboard[i].lat, spots_longboard[i].lng], {title: spots_longboard[i].name}).bindPopup(spots_longboard[i].name);
    longboard_points.push(tmp);
  }
  
  var empty_layer = L.layerGroup([]);
  var longboard_layer = L.layerGroup(longboard_points);
  
  
  // add a polyline, just for fun
  var route1 = L.polyline([[40,-3],[41,-2.5],[42,-1],[41, 0]]).bindPopup('polylinea!');
  var longboard_routes_layer = L.layerGroup([route1]);


  // Add map controls: not checkboxes!
  var overlayMaps = {
      "None"      : empty_layer,
      "Longboard" : longboard_layer,
      "Longboard Routes" : longboard_routes_layer
  };
  L.control.layers(overlayMaps).addTo(map);

  // añade una capa al mapa
  longboard_routes_layer.addTo(map);


  map.on('click', function(e){
    // Abrir modal para introducir datos
    
    // Asociar variables según el formulario
    title = 'hello!';

    // Guardar en base de datos
    
    // Cerrar modal
    // Mostramos en mapa
    L.marker(e.latlng, {title: title}).bindPopup('hello').addTo(map).openPopup();
  });



})