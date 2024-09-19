$(document).ready(function() {
    // Initialize Google Map
    var map;
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(40.691446, -73.886787),
            zoom: 11,
            scrollwheel: false,
            draggable: true,
        };

        map = new google.maps.Map(document.getElementById('google_map'), mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.691446, -73.886787),
            map: map,
            icon: 'images/icons/pin.png' // Custom marker image
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});
