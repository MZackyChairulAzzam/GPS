const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

function trackLocation() {
  if (!navigator.geolocation) {
    alert("Browser tidak mendukung GPS");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const phone =
        document.getElementById("phone").value || "Tanpa nomor";

      map.setView([lat, lon], 16);

      L.marker([lat, lon])
        .addTo(map)
        .bindPopup(
          `<b>Nomor:</b> ${phone}<br>
           <b>Latitude:</b> ${lat}<br>
           <b>Longitude:</b> ${lon}`
        )
        .openPopup();
    },
    error => {
      alert("Izin lokasi ditolak atau gagal");
    }
  );
}
