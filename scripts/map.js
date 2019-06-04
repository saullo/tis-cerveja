mapboxgl.accessToken = 'pk.eyJ1Ijoic2F1bGxvc2lsdmEiLCJhIjoiY2p3YW1hMWF1MGJobzQybjAybDQwenoxZiJ9.1VjwKMCPbdGzRjjq4uObkA';
let mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
let destiny = 'Rua claudio manoel, savassi'

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

    map.addControl(geolocate)
    map.addControl(direction, 'top-left')
    map.addControl(new mapboxgl.FullscreenControl())
    map.addControl(new mapboxgl.NavigationControl())
  }
});