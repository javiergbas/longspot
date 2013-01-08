
points = [{name: 'Spot en Mallorca', lng: '2.9', lat: '39.6'},{name: 'Otro Spot', lng: '1.4', lat: '41.6'}]


$().ready(function(){

  // Initialize map
  var map = L.map('map').setView([40, 2], 5);L.tileLayer('http://{s}.tiles.mapbox.com/v3/jgbas67.map-ayqdih62/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; Some attributions',
      maxZoom: 18
  }).addTo(map);

  // Add points
  for (var i in points) {
    L.marker([points[i].lat,points[i].lng], {title: points[i].name}).bindPopup(points[i].name).addTo(map);
  }
  
  // add a polyline, just for fun
  L.polyline([[40,-3],[41,-2.5],[42,-1],[41, 0]]).bindPopup('polylinea!').addTo(map);

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