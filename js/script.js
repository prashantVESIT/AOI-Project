/* ==========================================
            IMPORTS
========================================== */

import { getCityData } from "./api.js";

import {
    renderDashboard
} from "./ui.js";

import {
    updateDateTime,
    showLoading,
    hideLoading,
    saveRecentCity
} from "./utils.js";

import {
    initializeChart,
    updateChart
} from "./chart.js";


/* ==========================================
            DOM ELEMENTS
========================================== */

const cityInput = document.querySelector("#citySearch");
const searchButton = document.querySelector("#searchButton");
const searchForm = document.querySelector("#searchForm");


/* ==========================================
            LOAD CITY
========================================== */

async function loadCity(city) {

    try {

        showLoading();


        const data = await getCityData(city);


        // Update Dashboard UI
        renderDashboard(data);


        // Update AQI Chart
        updateChart(data.aqi);


        // Save searched city
        saveRecentCity(city);


    }

    catch (error) {

        console.error(error);

        alert(error.message);

    }

    finally {

        hideLoading();

    }

}



/* ==========================================
            SEARCH BUTTON
========================================== */

searchForm.addEventListener("submit", (e) => {

    e.preventDefault();


    const city = cityInput.value.trim();


    if (!city) {

        alert("Please enter a city.");

        return;

    }


    loadCity(city);

});



/* ==========================================
            ENTER KEY
========================================== */

cityInput.addEventListener("keydown", (e) => {


    if (e.key === "Enter") {

        searchButton.click();

    }


});



/* ==========================================
            DATE & TIME
========================================== */

updateDateTime();


setInterval(updateDateTime, 1000);



/* ==========================================
            INITIALIZE CHART
========================================== */

initializeChart();



/* ==========================================
            DEFAULT CITY
========================================== */

loadCity("Mumbai");