var map = L.map('map').setView([-11.182575, -40.537099], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-11.182575, -40.537099]).addTo(map)
    // .bindPopup('IFBA Jacobina')
    // .openPopup();