const API_KEY = cc5abb5d6ab4c4ab84d1cd14abb43c38'; // Replace this
const tucsonCoords = { lat: 32.2226, lon: -110.9747 };

async function getWeather() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${tucsonCoords.lat}&lon=${tucsonCoords.lon}&units=imperial&appid=${API_KEY}`);
  const data = await res.json();
  const heatIndex = data.main.feels_like;
  const riskLevel = document.getElementById('risk-level');

  if (heatIndex >= 110) {
    riskLevel.textContent = '🔥 Extreme Heat Risk – Stay indoors';
    riskLevel.style.background = '#ff4e00';
  } else if (heatIndex >= 100) {
    riskLevel.textContent = '🌡️ High Heat Risk – Limit time outside';
    riskLevel.style.background = '#ffa600';
  } else {
    riskLevel.textContent = '😊 Low/Moderate Heat Risk – Stay hydrated';
    riskLevel.style.background = '#a8dadc';
  }
}

getWeather();
