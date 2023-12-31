async function two ()

    {
        fetched = await fetch('https://api.covidtracking.com/v1/us/current.json')
        apiresult = await fetched.json();
        hospitalized = apiresult[0].hospitalizedCurrently

        var gaugeOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

// The speed gauge
var chartSpeed = Highcharts.chart('two', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100000,
        title: {
            text: 'limmit Guage'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Speed',
        data: [80],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">Number of people</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: 'Number of people'
        }
    }]

}));



function maker () {
    var point,
        newVal
        

    if (chartSpeed) {
        point = chartSpeed.series[0].points[0];
        
        newVal = hospitalized;

        if (newVal < 0 || newVal > 100000) {
            newVal = point.y - inc;
        }

        point.update(newVal);
    }

    
}

maker()

    }

    two()