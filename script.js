$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2008',  0,      50],
          ['2009',  50,     75],
          ['2010',  75,     25],
          ['2011',  50,     50],
          ['2012',  10,     75],
          ['2013',  50,     55],
          
        ]);

        var options = {
          title: 'Total Sale',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }


google.charts.setOnLoadCallback(drawChartss);
function drawChartss() {

        var data = google.visualization.arrayToDataTable([
          ['Effort', 'Amount given'],
          ['Target- $1000',     80 ],
          ['Last week- $523',     20],
          ['Last Month- $965', 0] 
        ]);

        var options = {
        	title: 'Total Revenue',
          pieHole: 0.7,
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'bottom'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }






function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Desktop'  , 'tablet' , 'Mobile' ,],
    ['2005',  50,    		200,     300,  ],
    ['2006',  75,    		150,     200,  ],
    ['2007',  100,   		175,     220,   ],
    ['2008',  75,    		150,     300,  ],
    ['2009',  50,    		175,     220,    ],
    ['2010',  75,    		150,     200,    ]
  ]);

  // Create and draw the visualization.
  new google.visualization.ColumnChart(document.getElementById('mchart')).
      draw(data,
           {title:"Sale Analytics",
            width:550, height:400,
            vAxis: {title: ""}, isStacked: true,
            hAxis: {title: ""}}
      );
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawVisualization);



