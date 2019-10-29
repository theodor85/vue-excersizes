Vue.component('input-sum', {
    template:'<input type="number" class="form-control" style="margin-top: 50px;">'
});

Vue.component('expense-button', {
    props: ['name'],
    template:'<button class="btn btn-success" style="margin: 3px;">{{ name }}</button>'

});

var plotComponent = Vue.component('plot', {
    props: ['data'],
    template:'<div><div id="plot" style="min-width: 310px; height: 400px; margin: 0 auto"></div></div>'
});

var app = new Vue({
    el: '#app',
    data: {
        expenses: [
            { id: 1, name: 'Еда' },
            { id: 2, name: 'Транспорт' },
            { id: 3, name: 'Одежда' },
            { id: 4, name: 'Бензин' },
            { id: 5, name: 'Коммунальные платежи' },
            { id: 6, name: 'Здоровье' },
            { id: 7, name: 'Хобби' },
        ],
        expenses_data: [
            { name: 'Еда', y: 123.73},
            { name: 'Транспорт', y: 458.64},
            { name: 'Одежда', y: 384.6},
            { name: 'Бензин', y: 158.5},
            { name: 'Коммунальные платежи', y: 1523.52},
            { name: 'Здоровье', y: 0},
            { name: 'Хобби', y: 0},
        ]
    },
    methods: {
        addExpense: function(){
            this.expenses_data[0]['y'] += 100
        }
    }
});

// Create the chart
var chart = Highcharts.chart('plot', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Расходы за текущий месяц'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Всего в рублях'
      }
  
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} руб.</b><br/>'
    },
  
    series: [
      {
        name: "Статьи расходов",
        colorByPoint: true,
        data: app.expenses_data
      }
    ],
    
  });