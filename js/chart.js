// ChartJS

const trafficOptions = document.querySelectorAll('.traffic-option-link');

const dailyCanvas = document.getElementById("daily-chart");

const mobileCanvas = document.getElementById("mobile-chart");

// Hourly traffic chart



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
    $('#myChart').remove();
    $('#line-chart-canvas-container').append('<canvas id="myChart"></canvas>');

    let dailyTrafficCanvas = document.getElementById('myChart');


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
    $('#myChart').remove();
    $('#line-chart-canvas-container').append('<canvas id="myChart"></canvas>');

    let hourlyTrafficCanvas = document.getElementById('myChart');


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
    // weeklyTrafficChart.destroy();
    // monthlyTrafficChart.destroy();
    // hourlyTrafficChart.destroy();
    // dailyTrafficChart.destroy();

    $('#myChart').remove();
    $('#line-chart-canvas-container').append('<canvas id="myChart"></canvas>');

    let weeklyTrafficCanvas = document.getElementById('myChart');

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
    $('#myChart').remove();
    $('#line-chart-canvas-container').append('<canvas id="myChart"></canvas>');

    let monthlyTrafficCanvas = document.getElementById('myChart');

    
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


// Draw the weekly chart for the first time before anything is clicked
let weeklyTrafficChart = new Chart(weeklyTrafficCanvas, {
    type: 'line',
    data: weeklyTrafficData,
    options: allTrafficOptions
});

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
};

// options for daily traffic bar chart
const dailyOptions = {
    responsive: true,   
    maintainAspectRatio: false, 
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
}

// draw the daily traffic bar chart

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


// data for the mobile data doughnut chart
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
};

// options for mobile data doughnut chart

const mobileOptions = {
    responsive: true,   
    maintainAspectRatio: false, 
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
}

// draw the mobile data doughnut chart 

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });

    
    