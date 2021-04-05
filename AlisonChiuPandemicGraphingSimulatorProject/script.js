document.getElementById("enterButton").addEventListener("click", clickedEnter);

var nameOfPandemic;
var nameOfYAxis;
var greatestAmountOfCases;
var unitOfTime;
var dataX1;
var dataX2;
var dataX3;
var dataX4;
var dataX5;
var dataX6;
var dataX7;
var dataX8;
var dataX9;
var dataX10;
var dataY1;
var dataY2;
var dataY3;
var dataY4;
var dataY5;
var dataY6;
var dataY7;
var dataY8;
var dataY9;
var dataY10;


var breakItem = document.getElementById("break");

breakItem.innerHTML = "<br>".repeat(10);

document.getElementById("enterButton").addEventListener("click", clickedEnter);

function getTextboxInput(idOfTextbox) {
	return document.getElementById(idOfTextbox).value;
}

function isItChecked(idOfRadioButton) {
	return document.getElementById(idOfRadioButton).checked;
}

function change_page(page){
  window.open(page);
}

function test() {
	document.getElementById("stuff").innerHTML = "whatever";
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart(line = 'Coronavirus', yaxis = 'Y-axis', xaxis="Years", x1=0, x2=0, x3=0, x4=0, x5=0, x6=0, x7=0, x8=0, x9=0, x10=0, y1=0, y2=0, y3=0, y4=0, y5=0, y6=0, y7=0, y8=0, y9=0, y10=0) {
	var data = google.visualization.arrayToDataTable([
		[yaxis, line],
        [x1, y1],
    	[x2, y2],
        [x3, y3],
        [x4, y4],
        [x5, y5],
        [x6, y6],
        [x7, y7],
        [x8, y8],
        [x9, y9],
        [x10, y10],
        ]);
		
		var options ={hAxis: 
			{title: xaxis,
			direction:-1, 
			slantedText:true, 
			slantedTextAngle:90
			}};
			
		var chart = new google.visualization.LineChart(document.getElementById('chart'));
		chart.draw(data, options);
}

function clickedEnter(){
	//testing/debugging: document.getElementById("stuff").innerHTML = "works";
	
	
	nameOfPandemic = document.getElementById("nameOfPandemic").value ;
	nameOfYAxis = document.getElementById("nameOfYAxis").value;
	
	
	dataX1 = parseInt(document.getElementById("userDataX1").value);
	dataX2 = parseInt(document.getElementById("userDataX2").value);
	dataX3 = parseInt(document.getElementById("userDataX3").value);
	dataX4 = parseInt(document.getElementById("userDataX4").value);
	dataX5 = parseInt(document.getElementById("userDataX5").value);
	dataX6 = parseInt(document.getElementById("userDataX6").value);
	dataX7 = parseInt(document.getElementById("userDataX7").value);
	dataX8 = parseInt(document.getElementById("userDataX8").value);
	dataX9 = parseInt(document.getElementById("userDataX9").value);
	dataX10 = parseInt(document.getElementById("userDataX10").value);
	
	dataY1 = parseInt(document.getElementById("userDataY1").value);
	dataY2 = parseInt(document.getElementById("userDataY2").value);
	dataY3 = parseInt(document.getElementById("userDataY3").value);
	dataY4 = parseInt(document.getElementById("userDataY4").value);
	dataY5 = parseInt(document.getElementById("userDataY5").value);
	dataY6 = parseInt(document.getElementById("userDataY6").value);
	dataY7 = parseInt(document.getElementById("userDataY7").value);
	dataY8 = parseInt(document.getElementById("userDataY8").value);
	dataY9 = parseInt(document.getElementById("userDataY9").value);
	dataY10 = parseInt(document.getElementById("userDataY10").value);
	
	//testing/debugging: document.getElementById("otherStuff").innerHTML = "worksToo";
	
	
	if (isItChecked('days')) {
		unitOfTime = "Days";
	} else if (isItChecked('months')) {
		unitOfTime = "Months";
	} else if (isItChecked('years')) {
		unitOfTime = "Years";
	}
	
	
	
	drawChart(nameOfPandemic, nameOfYAxis, unitOfTime, dataX1, dataX2, dataX3, dataX4, dataX5, dataX6, dataX7, dataX8, dataX9, dataX10, dataY1, dataY2, dataY3, dataY4, dataY5, dataY6, dataY7, dataY8, dataY9, dataY10);
	
	
	
	//For testing/debugging
	//document.getElementById("stuff").innerHTML = numberOfLines + nameOfPandemic + amountOfTime + nameOfXAxis + nameOfYAxis + greatestAmountOfCases + unitOfTime
}