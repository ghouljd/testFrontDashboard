new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [0,2,4,6,8],
    datasets: [{
        data: [1,2,5,6],
        label: "Semana 1",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [2,2,5,8],
        label: "Semana 2",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: [0,2,4,6],
        label: "Semana 3",
        borderColor: "#3cba9f",
        fill: false
      }, {
        data: [1,3,5,7],
        label: "Semana 4",
        borderColor: "#e8c3b9",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Tiempo trabajado por semana'
    }
  }
});
