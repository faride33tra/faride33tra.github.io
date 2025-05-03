function getIPLocation() {
  const ip = document.getElementById('ipInput').value;
  fetch(`http://ip-api.com/json/${ip}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        document.getElementById('result').innerHTML = `
          <p><strong>IP :</strong> ${data.query}</p>
          <p><strong>Pays :</strong> ${data.country}</p>
          <p><strong>Région :</strong> ${data.regionName}</p>
          <p><strong>Ville :</strong> ${data.city}</p>
          <p><strong>Fournisseur :</strong> ${data.isp}</p>
          <p><strong>Latitude :</strong> ${data.lat}</p>
          <p><strong>Longitude :</strong> ${data.lon}</p>
        `;
      } else {
        document.getElementById('result').innerHTML = `<p>Adresse IP invalide</p>`;
      }
    })
    .catch(error => {
      document.getElementById('result').innerHTML = `<p>Erreur : ${error}</p>`;
    });
}
