# 🌍 AirIndx – Real-Time Air Quality Dashboard

AirIndx is a modern and responsive web application that provides real-time Air Quality Index (AQI), weather conditions, and pollution data for cities around the world. It combines weather and air quality APIs to deliver an intuitive dashboard with interactive visualizations and health recommendations.

---

## ✨ Features

- 🌍 Search air quality by city
- 📊 Live Air Quality Index (AQI)
- 📈 Interactive AQI trend chart using Chart.js
- 🌡️ Current weather information
- 💧 Humidity, Wind Speed & Visibility
- 🌫️ Major pollutant levels
  - PM2.5
  - PM10
  - CO
  - NO₂
  - SO₂
  - O₃
- ❤️ Health recommendations based on AQI
- 📍 Dynamic location updates
- 🕒 Live date and time
- 💾 Recent city search storage
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Chart.js
- OpenWeather API
- World Air Quality Index (WAQI) API

---

## 📂 Project Structure

```
AirIndx/
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── screenshots/
│
├── js/
│   ├── api.js
│   ├── chart.js
│   ├── script.js
│   ├── ui.js
│   └── utils.js
│
├── index.html
├── style.css
├── README.md
├── LICENSE
├── .gitignore
└── .env
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/prashantVESIT/AOI-Project.git
```

### Open the project

Open the project folder in Visual Studio Code.

### Configure API Keys

Create a `.env` file in the project root and add your API keys:

```env
OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
WAQI_API_KEY=YOUR_WAQI_API_KEY
```

> **Note:** This project currently uses frontend API requests. For production deployments, API requests should be moved to a backend service to keep API keys secure.

---

## 📸 Screenshots

Add screenshots of your dashboard inside:

```
assets/screenshots/
```

Example:

- Home Dashboard
- AQI Chart
- Search Result
- Mobile View

---

## 🌐 APIs Used

- OpenWeather API
- World Air Quality Index (WAQI) API

---

## 📈 Future Improvements

- Live AQI map integration
- 7-day AQI forecast
- Geolocation support
- Dark/Light mode
- Air quality comparison between cities
- PWA support
- Backend integration for secure API keys

---

## 👨‍💻 Author

**Prashant Singh**

Computer Engineering Student | VESIT

GitHub: https://github.com/prashantVESIT

---

## 📄 License

This project is licensed under the MIT License.
