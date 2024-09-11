var map = L.map('map').setView([19.503310715612454, -99.18630114317423], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Icono personalizado
var customIcon = L.icon({
    iconUrl: 'icons/bicicleta.png', // Cambia esta URL por la de tu icono
    iconSize: [40, 40], // Tamaño del icono
    iconAnchor: [19, 38], // Punto de anclaje
    popupAnchor: [0, -38] // Punto del popup relativo al icono
});

var marker1 = L.marker([19.503027544673035, -99.18598196029357]).addTo(map);
var marker2 = L.marker([19.503315772232558, -99.18792924404558], {icon: customIcon}).addTo(map);

marker1.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker2.bindPopup("<b>Bicicletas:</b><br><img src='images/bikes.jpg' width='100%'><br>Foto de <a href='https://unsplash.com/es/@zaccastravels?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>ZACHARY STAINES</a> en <a href='https://unsplash.com/es/fotos/aparcamiento-surtido-de-bicicletas-de-cercanias-cerca-del-coche-amarillo-durante-el-dia-KEhNcoCldbk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>");
  