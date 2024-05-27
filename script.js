// Custom JS for interactivity
$(document).ready(function(){
    // jQuery for dropdown menu
    $('.dropdown-toggle').dropdown();

    // Google Maps integration
    function initMap() {
        var location = {lat: -34.397, lng: 150.644};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // Load Google Maps script dynamically
    function loadScript(src) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        document.body.appendChild(script);
    }

    loadScript('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap');
});
