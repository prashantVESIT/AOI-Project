/* ==========================================
        API CONFIGURATION
========================================== */

const OPENWEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY";
const WAQI_API_KEY = "YOUR_WAQI_API_KEY";

const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const WAQI_URL = "https://api.waqi.info/feed/geo:";


/* ==========================================
        GET COORDINATES
========================================== */

export async function getCoordinates(city) {

    const response = await fetch(
        `${GEO_URL}?q=${encodeURIComponent(city)}&limit=1&appid=${OPENWEATHER_API_KEY}`
    );

    if (!response.ok) {
        const error = await response.text();
        console.error("OpenWeather Error:", error);
        throw new Error(`OpenWeather API Error (${response.status})`);
    }

    const data = await response.json();

    if (!data || data.length === 0) {
        throw new Error("City not found.");
    }

    const place = data[0];

    return {
        city: place.name,
        country: place.country,
        lat: place.lat,
        lon: place.lon
    };
}


/* ==========================================
        GET WEATHER
========================================== */

export async function getWeather(lat, lon) {

    const response = await fetch(
        `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
        const error = await response.text();
        console.error("Weather Error:", error);
        throw new Error(`Weather API Error (${response.status})`);
    }

    return await response.json();
}


/* ==========================================
        GET AIR QUALITY
========================================== */

export async function getAQI(lat, lon) {

    const response = await fetch(
        `${WAQI_URL}${lat};${lon}/?token=${WAQI_API_KEY}`
    );

    if (!response.ok) {
        const error = await response.text();
        console.error("WAQI Error:", error);
        throw new Error(`WAQI API Error (${response.status})`);
    }

    const data = await response.json();

    if (data.status !== "ok") {
        return {
            data: {
                aqi: 0,
                iaqi: {}
            }
        };
    }

    return data;
}


/* ==========================================
        COMPLETE CITY DATA
========================================== */

export async function getCityData(city) {

    const location = await getCoordinates(city);

    const weather = await getWeather(
        location.lat,
        location.lon
    );

    const aqiData = await getAQI(
        location.lat,
        location.lon
    );

    return {

        city: location.city,
        country: location.country,

        // AQI
        aqi: aqiData.data?.aqi ?? 0,

        // Weather
        temperature: Math.round(weather.main.temp),
        feelsLike: Math.round(weather.main.feels_like),
        humidity: weather.main.humidity,
        wind: Math.round(weather.wind.speed * 3.6),
        condition: weather.weather[0].description,
        visibility: Math.round(weather.visibility / 1000),

        // Pollutants
        pm25: aqiData.data?.iaqi?.pm25?.v ?? 0,
        pm10: aqiData.data?.iaqi?.pm10?.v ?? 0,
        co: aqiData.data?.iaqi?.co?.v ?? 0,
        no2: aqiData.data?.iaqi?.no2?.v ?? 0,
        so2: aqiData.data?.iaqi?.so2?.v ?? 0,
        o3: aqiData.data?.iaqi?.o3?.v ?? 0

    };

}