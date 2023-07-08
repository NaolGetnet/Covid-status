


async function one()


{
    fetched = await fetch('https://api.covidtracking.com/v1/us/current.json')
apiresult = await fetched.json();


console.log(apiresult)
negative = apiresult[0].negative
positive = apiresult[0].positive

console.log(negative,positive)


    


var testresult = 'Results'

var data = [{
    name: 'Positive',
    data: [positive]
}, {
    name: 'Negative',
    data: [negative]
}]








    function buildchart(testresult, data) {
    
        Highcharts.chart('chartone', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Current test results',
                
            },
            
            
            xAxis: {
                categories: testresult,
                crosshair: true,
                accessibility: {
                    description: 'testresult'
                }
            },
            yAxis: {
                min: 0,
                
            },
            tooltip: {
                valueSuffix: ' (1000 MT)'
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: data
        });
    
    
    
    }


    buildchart(testresult, data);


}


one()