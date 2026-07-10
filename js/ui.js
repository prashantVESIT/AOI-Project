/* ==========================================
            DOM ELEMENTS
========================================== */

const $ = (selector) => document.querySelector(selector);



/* ==========================================
            AQI STATUS
========================================== */

export function getAQIStatus(aqi) {


    if (aqi <= 50) {

        return {
            text:"Good",
            color:"#22c55e",
            advice:[
                "Enjoy outdoor activities.",
                "Air quality is excellent.",
                "No health precautions needed."
            ]
        };

    }


    if (aqi <= 100) {

        return {
            text:"Moderate",
            color:"#facc15",
            advice:[
                "Sensitive people should limit outdoor activity.",
                "Air quality is acceptable.",
                "Keep hydrated."
            ]
        };

    }


    if (aqi <= 150) {

        return {
            text:"Poor",
            color:"#fb923c",
            advice:[
                "Wear a mask outdoors.",
                "Reduce prolonged outdoor exercise.",
                "Children and elderly should stay cautious."
            ]
        };

    }


    if (aqi <= 200) {

        return {
            text:"Unhealthy",
            color:"#ef4444",
            advice:[
                "Avoid outdoor activities.",
                "Keep windows closed.",
                "Use an air purifier if available."
            ]
        };

    }


    return {

        text:"Hazardous",
        color:"#7e22ce",

        advice:[
            "Remain indoors.",
            "Avoid outdoor exposure.",
            "Follow health advisories."
        ]

    };

}



/* ==========================================
            UPDATE AQI
========================================== */

export function updateAQI(data){


    const aqi = data.aqi;


    const status = getAQIStatus(aqi);



    $("#mainAqi").textContent = aqi;

    $("#badge").textContent = aqi;

    $("#marker").textContent = aqi;

    $("#popupAqi").textContent = aqi;



    $("#aqiStatus").textContent = status.text;

    $("#popupStatus").textContent = status.text;



    $("#mainAqi").style.color = status.color;

    $("#badge").style.background = status.color;

    $("#marker").style.background = status.color;


}



/* ==========================================
            UPDATE WEATHER
========================================== */

export function updateWeather(data){


    $("#temperature").textContent =
        `${data.temperature}°C`;


    $("#humidity").textContent =
        `${data.humidity}%`;


    $("#wind").textContent =
        `${data.wind} km/h`;



    $("#feelsLike").textContent =
        `${data.feelsLike}°C`;



    $("#visibility").textContent =
        `${data.visibility} km`;



    $("#condition").textContent =
        data.condition;

}



/* ==========================================
            UPDATE LOCATION
========================================== */

export function updateLocation(data){


    $("#location").textContent =
        `${data.city}, ${data.country}`;


    $("#popupCity").textContent =
        `${data.city}, ${data.country}`;

}



/* ==========================================
            UPDATE POLLUTANTS
========================================== */

export function updatePollutants(data){


    $("#pm25").textContent = data.pm25;

    $("#pm10").textContent = data.pm10;

    $("#co").textContent = data.co;

    $("#no2").textContent = data.no2;

    $("#so2").textContent = data.so2;

    $("#o3").textContent = data.o3;


}



/* ==========================================
            HEALTH ADVICE
========================================== */

export function updateAdvice(aqi){


    const advice = getAQIStatus(aqi).advice;


    $("#advice1").textContent = advice[0];

    $("#advice2").textContent = advice[1];

    $("#advice3").textContent = advice[2];


}



/* ==========================================
            RENDER DASHBOARD
========================================== */

export function renderDashboard(data){


    updateAQI(data);


    updateWeather(data);


    updateLocation(data);


    updatePollutants(data);


    updateAdvice(data.aqi);


    updateTime();


}



/* ==========================================
            LAST UPDATED
========================================== */

export function updateTime(){


    $("#lastUpdated").textContent =

        new Date().toLocaleTimeString();


}