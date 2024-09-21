const chartLabels = [];
const chartData = [];
const ctx = document.getElementById('chartCanvas').getContext('2d');

const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: chartLabels,
    datasets: [{
      label: 'Portfolio Distribution',
      data: chartData,
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#66FF66',
        '#FF6666'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true
  }
});

function updateChart() {
  chartLabels.length = 0;
  chartData.length = 0;

  investments.forEach(inv => {
    chartLabels.push(inv.assetName);
    chartData.push(inv.currentValue);
  });

  chart.update();
}
