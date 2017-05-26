Chart.defaults.global.defaultFontFamily="'Raleway'";
Chart.defaults.global.defaultFontSize=22;
new Chart(document.getElementById("line-chart"), {

  type: 'line',
  data: {
    labels: [1,2,3,4],
    datasets: [{
        data: [10,20,50,60],
        label: "Tiempo disponible",
        borderColor: "#FF9800",
        fill: false
      }, {
        data: [20,20,50,80],
        label: "Tiempo trabajado",
        borderColor: "#64DD17",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Tiempo trabajado vs Tiempo disponible por semana'
    }
  }
});
