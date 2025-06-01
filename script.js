document.addEventListener('DOMContentLoaded', function () {
  fetch('data/sp500_data.csv')
    .then(response => response.text())
    .then(csv => {
      const lines = csv.trim().split('\n').slice(3); 

      const data = lines.map(line => {
        const [dateStr, close] = line.split(',');
        return [new Date(dateStr).getTime(), parseFloat(close)];
      });

      Highcharts.stockChart('container', {
        title: {
          text: 'S&P 500 Historical Data'
        },
        xAxis: {
          gridLineWidth: 0,
          tickLength: 0,
        },
        yAxis: {
          gridLineWidth: 0,
          tickLength: 0,
          title: {
            text: 'Price'
          },
        },
        rangeSelector: {
          selected: 1,
          buttonTheme: {
            width: 40
          },
          inputEnabled: false,
          labelStyle: {
            display: 'none'
          },
        },
        navigator: {
          enabled: false
        },
        series: [{
          name: 'S&P 500 Close',
          data: data,
          tooltip: {
            valueDecimals: 2
          },
          color: '#3e5587'
        }]
      });
    });
});
