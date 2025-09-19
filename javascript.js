async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "e24d1f249ef158760b5e10d403dfb0c0"; // 🔑 Replace with your OpenWeather API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    document.getElementById("result").innerHTML = `
      <div class="temp">${data.main.temp}°C</div>
      <div class="desc">${data.weather[0].description}</div>
      <div class="icon">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
      </div>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>❌ ${error.message}</p>`;
  }
}
