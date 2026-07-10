/* ==========================================
        AQI CHART
========================================== */

let aqiChart = null;


export function initializeChart() {

    const canvas = document.getElementById("aqiChart");

    if (!canvas) return;


    const ctx = canvas.getContext("2d");


    aqiChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: [
                "10 AM",
                "11 AM",
                "12 PM",
                "1 PM",
                "2 PM"
            ],

            datasets: [

                {
                    label: "AQI Level",

                    data: [
                        65,
                        72,
                        78,
                        82,
                        75
                    ],

                    tension: 0.4,

                    fill: true,

                    borderWidth: 3,

                    borderColor: "#6366f1",

                    backgroundColor:
                    "rgba(99,102,241,0.15)",


                    pointRadius: 5,

                    pointBackgroundColor:"#6366f1"

                }

            ]

        },


        options: {

            responsive:true,

            maintainAspectRatio:false,


            plugins: {

                legend: {

                    display:true,

                    position:"top"

                }

            },


            scales:{


                x:{

                    title:{

                        display:true,

                        text:"Time"

                    }

                },


                y:{

                    beginAtZero:true,


                    title:{

                        display:true,

                        text:"AQI"

                    }

                }

            }

        }

    });

}



/* ==========================================
        UPDATE CHART
========================================== */


export function updateChart(aqi){


    if(!aqiChart) return;


    const time = new Date().toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

    });



    aqiChart.data.labels.push(time);


    aqiChart.data.datasets[0]
    .data.push(Number(aqi));



    // Keep last 10 readings

    if(aqiChart.data.labels.length > 10){


        aqiChart.data.labels.shift();


        aqiChart.data.datasets[0]
        .data.shift();


    }



    aqiChart.update();


}