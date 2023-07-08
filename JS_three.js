async function three ()
{
    fetched = await fetch('https://api.covidtracking.com/v1/us/current.json')
    apiresult = await fetched.json();
    
    cur = apiresult[0].hospitalizedCurrently
    cum = apiresult[0].hospitalizedCumulative

    console.log(cur,cum)

Highcharts.chart('three', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hospitalized Cumulative'
    },
    xAxis: {
        categories: ['Hospitalized']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'People'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [
         {
        name: 'Cumulated',
        data: [cum]
    }, 
    {
        name: 'Current',
        data: [cur]
    }]
});

}

three ()