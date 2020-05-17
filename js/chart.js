// ChartJS

const trafficOptions = document.querySelectorAll('.traffic-option-link');

// Hourly traffic chart

let hourlyTrafficCanvas = document.getElementById('myChart');


let hourlyTrafficData = {
    labels: ["11", "12", "1", "2", "3", "4", "5", "6", "7" ],
    datasets: [{
    data: [200, 300, 250, 150, 100, 80, 100, 180, 200],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};


// Daily traffic chart

let dailyTrafficCanvas = document.getElementById('myChart');


let dailyTrafficData = {
    labels: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500, 2800],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};


// Weekly traffic chart
let weeklyTrafficCanvas = document.getElementById('myChart');

let weeklyTrafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

let allTrafficOptions = {
    responsive: true,   
    maintainAspectRatio: false, 
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};


// Monthly traffic chart
let monthlyTrafficCanvas = document.getElementById('myChart');


let monthlyTrafficData = {
    labels: ["November", "December", "January", "February", "March", "April", "May"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};


// Click listener for daily option
trafficOptions[1].addEventListener('click', ()=> {
    let dailyTrafficChart = new Chart(dailyTrafficCanvas, {
        type: 'line',
        data: dailyTrafficData,
        options: allTrafficOptions
    });

    if (trafficOptions[1].classList.contains('active') === false) {
        trafficOptions[1].classList.add('active');
    }
    trafficOptions[0].classList.remove('active');
    trafficOptions[2].classList.remove('active');
    trafficOptions[3].classList.remove('active');
});

// Click listener for hourly option
trafficOptions[0].addEventListener('click', ()=> {
    let hourlyTrafficChart = new Chart(hourlyTrafficCanvas, {
        type: 'line',
        data: hourlyTrafficData,
        options: allTrafficOptions
    });

    if (trafficOptions[0].classList.contains('active') === false) {
        trafficOptions[0].classList.add('active');
    }
    trafficOptions[1].classList.remove('active');
    trafficOptions[2].classList.remove('active');
    trafficOptions[3].classList.remove('active');
});


// Click listener for weekly option
trafficOptions[2].addEventListener('click', ()=> {
    let weeklyTrafficChart = new Chart(weeklyTrafficCanvas, {
        type: 'line',
        data: weeklyTrafficData,
        options: allTrafficOptions
    });
    
    if (trafficOptions[2].classList.contains('active') === false) {
        trafficOptions[2].classList.add('active');
    }
    trafficOptions[1].classList.remove('active');
    trafficOptions[0].classList.remove('active');
    trafficOptions[3].classList.remove('active');
});


// Click listener for montly option
trafficOptions[3].addEventListener('click', ()=> {
    let monthlyTrafficChart = new Chart(monthlyTrafficCanvas, {
        type: 'line',
        data: monthlyTrafficData,
        options: allTrafficOptions
    });
    
    if (trafficOptions[3].classList.contains('active') === false) {
        trafficOptions[3].classList.add('active');
    }
    trafficOptions[1].classList.remove('active');
    trafficOptions[0].classList.remove('active');
    trafficOptions[2].classList.remove('active');
});
