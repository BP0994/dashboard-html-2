
var ctx = document.getElementById("stacker-bar-chart").getContext('2d');
var myChart = new Chart(ctx, {
          type: 'bar',
          Animation: false,
          data: {
                    labels: ["20", "25", "30", "35", "40" ,"45" , "50", "55", "60" , "65" ,"70"],
                    datasets: [{
                              label: 'Employer',
                              backgroundColor: "#516bea",
                              data: [10, 12, 15 , 20, 25  , 30, 35 , 40, 45 , 50,55],
                    }, {
                              label: 'Employee',
                              backgroundColor: "#2558ff",
                              data: [20, 25, 30 , 40,50, 60, 70, 80,90,100,120],
                    }, {
                              label: 'Total Interest',
                              backgroundColor: "#372dff",
                              data: [50 ,100, 120,150,170,200,220,250,270,300,320],
                    }],
          },
          options: {
                    tooltips: {
                              displayColors: true,
                              callbacks: {
                                        mode: 'x',
                              },
                    },
                    scales: {
                              x: {
                                        stacked: true,
                              },
                              y: {
                                        stacked: true
                              }
                    },
                    responsive: false
          }
});


function rangeSlide(value) {
          document.getElementById('rangeValue').innerHTML = value;
      }

