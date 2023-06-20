let map;
const pos1 = { lat: -25.6953, lng: -54.4367};
const pos2 = { lat: 48.8584, lng: 2.2945};
const pos3 = { lat: 36.0562, lng: -112.1251};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: pos2 ,
    zoom: 3,
  });
  const marker = new google.maps.Marker({
    position: pos2,
    map: map,
  });

  setPosition(pos1);
  setPosition(pos3);

  marker.setPosition({lat, lng})
}

setPosition = (position) => {
    const marker = new google.maps.Marker({
        position: position,
        map: map,
    });
}


window.initMap = initMap;