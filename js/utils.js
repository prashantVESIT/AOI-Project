/* ==========================================
   AIRINDX UTILITY FUNCTIONS
========================================== */


/**
 * DOM Selectors
 */

export const $ = (selector) => document.querySelector(selector);

export const $$ = (selector) => document.querySelectorAll(selector);



/* ==========================================
   DATE & TIME
========================================== */

export function updateDateTime() {

    const now = new Date();


    const options = {

        weekday: "long",

        day: "numeric",

        month: "long",

        year: "numeric",

    };


    const date = now.toLocaleDateString(
        "en-US",
        options
    );


    const time = now.toLocaleTimeString(
        "en-US",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }
    );


    const element = $("#datetime");


    if (element) {

        element.textContent =
            `${date} • ${time}`;

    }

}



/* ==========================================
   NUMBER FORMAT
========================================== */

export function formatNumber(number) {

    return Number(number).toLocaleString();

}



/* ==========================================
   ANIMATE COUNTER
========================================== */

export function animateCounter(
    element,
    endValue,
    duration = 1200
) {


    if (!element) return;


    let start = 0;


    const increment =
        endValue / (duration / 16);



    function update() {


        start += increment;



        if (start >= endValue) {


            element.textContent =
                Math.round(endValue);


            return;

        }



        element.textContent =
            Math.round(start);



        requestAnimationFrame(update);


    }



    update();


}



/* ==========================================
   LOADING
========================================== */

export function showLoading() {


    const loader = $("#loading");


    if (loader) {

        loader.classList.add("active");

    }

}



export function hideLoading() {


    const loader = $("#loading");


    if (loader) {

        loader.classList.remove("active");

    }

}



/* ==========================================
   DEBOUNCE
========================================== */

export function debounce(
    callback,
    delay = 500
) {


    let timer;


    return (...args) => {


        clearTimeout(timer);


        timer = setTimeout(() => {


            callback(...args);


        }, delay);


    };


}



/* ==========================================
   LOCAL STORAGE
========================================== */

export function saveRecentCity(city) {


    let cities =
        JSON.parse(
            localStorage.getItem("recentCities")
        ) || [];



    cities =
        cities.filter(
            c => c !== city
        );



    cities.unshift(city);



    cities =
        cities.slice(0,5);



    localStorage.setItem(
        "recentCities",
        JSON.stringify(cities)
    );


}



export function getRecentCities() {


    return JSON.parse(

        localStorage.getItem("recentCities")

    ) || [];


}



/* ==========================================
   GEOLOCATION
========================================== */

export function getCurrentLocation() {


    return new Promise(
        (resolve,reject)=>{


            navigator.geolocation
            .getCurrentPosition(
                resolve,
                reject
            );


        }
    );


}



/* ==========================================
   RANDOM GREETING
========================================== */

export function getGreeting() {


    const hour =
        new Date().getHours();



    if(hour < 12)

        return "Good Morning ☀️";



    if(hour < 17)

        return "Good Afternoon 🌤";



    return "Good Evening 🌙";


}