mapboxgl.accessToken = 'pk.eyJ1Ijoic2F1bGxvc2lsdmEiLCJhIjoiY2p3YW1hMWF1MGJobzQybjAybDQwenoxZiJ9.1VjwKMCPbdGzRjjq4uObkA';
let mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });

function initMap(market) {
  let query

  switch (market) {
    case 'Epa':
      query = 'R. Curitiba, 1001 - Centro, Belo Horizonte - MG, 30170-121'
      break
    case 'Extra':
      query = 'Av. Francisco Sales, 898 - Santa Efigênia, Belo Horizonte - MG, 30150-221'
      break
    case 'Supermercado Bh':
      query = 'Av. Paraná, 470 - Centro, Belo Horizonte - MG, 30120-020'
      break
    case 'Dia':
      query = 'R. da Bahia, 1709 - Lourdes, Belo Horizonte - MG, 30160-011'
      break
    case 'Supernosso':
      query = 'R. Gonçalves Dias, 2001 - Lourdes, Belo Horizonte - MG, 30140-092'
      break
    default:
      query = ''
      break
  }

  mapboxgl.accessToken = 'pk.eyJ1Ijoic2F1bGxvc2lsdmEiLCJhIjoiY2p3YW1hMWF1MGJobzQybjAybDQwenoxZiJ9.1VjwKMCPbdGzRjjq4uObkA';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
  });

  let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    }, 
    trackUserLocation: true
  })

  let directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    language: 'fr',
    geocoder: {
      language: 'fr'
    },
  })
  var language = new MapboxLanguage({
    defaultLanguage: 'pt'
  });
  
  map.addControl(language);
  map.addControl(geolocate);
  map.addControl(directions, 'top-left')
  map.addControl(new mapboxgl.FullscreenControl())

  geolocate.on('geolocate', function(e) {
    var lon = e.coords.longitude;
    var lat = e.coords.latitude
    var position = [lon, lat];
    
    directions.setOrigin(position)
    directions.setDestination(query)
  });

  setTimeout(function() {
    $(".mapboxgl-ctrl-geolocate").click();
  }, 1000);
}

function initMap2(market) {
  let destiny
  if (market == 'abc') {
    console.log('hello')
  }
  mapboxClient.geocoding.forwardGeocode({
    query: destiny,
    autocomplete: false,
    limit: 1,
  }).send().then(function (response) {
    if (response && response.body && response.body.features && response.body.features.length) {
      let feature = response.body.features[0];
    
      let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: feature.center,
        zoom: 15
      });
  
      new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
  
      let direction = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        interactive: false,
      })
  
      direction.setDestination(destiny)
  
      // Add geolocate control to the map.
      let geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
  
      setTimeout(function() {
        $(".mapboxgl-ctrl-geolocate").click();
      }, 1000);   
  
      geolocate.on('geolocate', () => {
        //Get the updated user location, this returns a javascript object.
        var userlocation = geolocate._lastKnownPosition;
  
        //Your work here - Get coordinates like so
        var lat = userlocation.coords.latitude;
        var lng = userlocation.coords.longitude;
  
        direction.setOrigin([lng, lat])
      })

      new mapboxgl.Marker()
      .setLngLat([30.5, 50.5])
      .addTo(map);
  
      map.addControl(geolocate)
      map.addControl(direction, 'top-left')
      map.addControl(new mapboxgl.FullscreenControl())
      map.addControl(new mapboxgl.NavigationControl())
    }
  });
}