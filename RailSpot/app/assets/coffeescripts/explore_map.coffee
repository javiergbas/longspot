spots_longboard = [{name: 'Spot en Mallorca', lng: '2.9', lat: '39.6'},{name: 'Otro Spot', lng: '1.4', lat: '41.6'}]
spots_skate = [{name: 'Spot en Mallorca', lng: '1', lat: '40'},{name: 'Otro Spot', lng: '2.4', lat: '37'}]



# Initialize map (not in $ready!)
map = L.map('explore_map').setView([40, 2], 5);L.tileLayer('http://{s}.tiles.mapbox.com/v3/jgbas67.map-ayqdih62/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; Some attributions',
    maxZoom: 18
}).addTo(map)
  
  
$ ->
  # Adjust map height on window resize
  $('#explore_map').css('height', $(window).height()-120)
  $(window).resize ->
    $('#explore_map').css('height', $(window).height()-120)
    return


  # Initialize custom controls
  $('#map_controls #show_arrow').click ->
    if $('#map_controls').hasClass('minimized')
      event.preventDefault()
      $('#map_controls').removeClass('minimized')
      $('#map_controls #show_arrow span').removeClass('icon-chevron-right').addClass('icon-chevron-left')
    else
      $('#map_controls').addClass('minimized')
      $('#map_controls #show_arrow span').removeClass('icon-chevron-left').addClass('icon-chevron-right')
    return



  # Move controls to the right
  $('.leaflet-control-container div').removeClass('leaflet-left').addClass('leaflet-right')

  # Add points (falta)
    
  # Add a random point
  L.marker([40, -6], {title: 'Random one'}).bindPopup('<b>Random one</b><br/><a href="/spots/2">Ver más</a>').addTo(map)
  

  # map.on 'click', (e) ->
  #     title = 'hello!'
  #     L.marker(e.latlng, {title: title}).bindPopup('hello').addTo(map).openPopup()
  


  $('#add_spot_btn').click ->
    event.preventDefault()
    start_add_spot()
    return
    
  $('#create_spot').click ->
    $('#add_form').hide()
    $('#filters').show()
    $('#message_wrapper span').html('Spot added!')
    $('#message_wrapper').show().delay(3000).fadeOut()
    return
    

  return
  # End of $ready

  
  
  
start_add_spot = () ->
  $('#map_controls #filters').hide()
  $('#add_form').show()
  $('form#add_spot').hide()

  map.on 'click', (e) ->
    $('form#add_spot').show()
    $('#add_spot .lng').html(e.latlng.lng.toFixed(2))
    $('#add_spot .lat').html(e.latlng.lat.toFixed(2))
    $('#add_form .message').html('Just some details...')
    console.log e.latlng
    return
  
  return
  
  
  
  