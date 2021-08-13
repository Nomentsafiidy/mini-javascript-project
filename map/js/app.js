setTimeout(() => {
    let map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('mapContainer'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }

    initMap();
    let autocomplete = document.getElementById('destination');
    const aze = new google.maps.places.Autocomplete(autocomplete, { types: ['geocode'] });
    aze.addListener('place_changed', fillInAddress);

    function fillInAddress() {
        // Get the place details from the autocomplete object.
        const place = aze.getPlace();
        console.log('place', place);
    }
}, 2000);
