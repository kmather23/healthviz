$(function () {
    $('#moodgraph').highcharts({
        chart: {
        },
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
        },
        tooltip: {
            formatter: function() {
                var s;
                if (this.point.name) { // the pie chart
                    s = ''+
                        this.point.name +': '+ this.y +' fruits';
                } else {
                    s = ''+
                        this.x  +': '+ this.y;
                }
                return s;
            }
        },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '40px',
                    top: '8px',
                    color: 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
            	lineWidth: 2,
            	lineColor: Highcharts.getOptions().colors[3],
            	fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});


$(function () {
    $('#sleepgraph').highcharts({
        chart: {
            type: 'waterfall'
        },

        title: {
            text: 'Highcharts Waterfall'
        },

        xAxis: {
            type: 'category'
        },

        yAxis: {
            title: {
                text: 'USD'
            }
        },

        legend: {
            enabled: false
        },

        tooltip: {
            pointFormat: '<b>${point.y:,.2f}</b> USD'
        },

        series: [{
            upColor: Highcharts.getOptions().colors[2],
            color: Highcharts.getOptions().colors[3],
            data: [{
                name: 'Start',
                y: 120000
            }, {
                name: 'Product Revenue',
                y: 569000
            }, {
                name: 'Service Revenue',
                y: 231000
            }, {
                name: 'Positive Balance',
                isIntermediateSum: true,
                color: Highcharts.getOptions().colors[1]
            }, {
                name: 'Fixed Costs',
                y: -342000
            }, {
                name: 'Variable Costs',
                y: -233000
            }, {
                name: 'Balance',
                isSum: true,
                color: Highcharts.getOptions().colors[1]
            }],
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                },
                style: {
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    textShadow: '0px 0px 3px black'
                }
            },
            pointPadding: 0
        }]
    });
});

$(function () {
    $('#exercisegraph').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
});

function initMenu() {
	var block = $(".day");
		block.addClass("clickable");
		block.hover(function(){window.status = $(this)}, function(){window.status = ""});
	
	$('.open').hide();
	block.click(
		function() {
			$(this).parents('div:eq(0)').find('.open').slideToggle('fast');	
		}
	);
}
	
$(document).ready(function() {initMenu();});