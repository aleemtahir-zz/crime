<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="css/style.css">
<title>Crime</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>


<script type="text/javascript">
var chartData1 = {};
var chartData2 = {};
var chartData3 = {};
var chartData4 = {};
var chartData5 = {};
var chartData6 = {};

function respondCanvas(ctx, chartData) {             
    //Call a function to redraw other content (texts, images etc)
    var ctx1 = document.getElementById("myChart1").getContext("2d");
    var myChart1 = new Chart(ctx1, {
    	
        type: 'horizontalBar',
        data: chartData1,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    });
}
function respondCanvas2() {             
    //Call a function to redraw other content (texts, images etc)
    var ctx2 = document.getElementById("myChart2").getContext("2d");
    var myChart1 = new Chart(ctx2, {
    	
        type: 'horizontalBar',
        data: chartData2,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    });
}
function respondCanvas3() {             
    //Call a function to redraw other content (texts, images etc)
    var ctx2 = document.getElementById("myChart3").getContext("2d");
    var myChart1 = new Chart(ctx2, {
    	
        type: 'horizontalBar',
        data: chartData3,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    });
}
function respondCanvas4() {             
    //Call a function to redraw other content (texts, images etc)
    var ctx2 = document.getElementById("myChart4").getContext("2d");
    var myChart1 = new Chart(ctx2, {
    	
        type: 'horizontalBar',
        data: chartData4,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    });
}
function respondCanvas5() {             
    //Call a function to redraw other content (texts, images etc)
    var ctx2 = document.getElementById("myChart5").getContext("2d");
    var myChart1 = new Chart(ctx2, {
    	
        type: 'horizontalBar',
        data: chartData5,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    });
}
function respondCanvas6() {             
    //Call a function to redraw other content (texts, images etc)
    var ctx2 = document.getElementById("myChart6").getContext("2d");
    var myChart1 = new Chart(ctx2, {
    	
        type: 'horizontalBar',
        data: chartData6,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            }
        }
    });
}
var GetChartData = function () {
    $.ajax({
        url: 'reportServlet?param=graph1',
        method: 'GET',
        dataType: 'json',
        async:false,
        success: function (d) {
           console.log(d);
           
           chartData1 = {
                   labels: d.yAxis, 
                   datasets: [
                       {
                           data: d.xAxis,
                           //hoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                           //label: "My First dataset",
                           fill: false,
                           lineTension: 0.1,
                           backgroundColor: [
                        	   'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderColor: [
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',	
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderWidth: 1
                       }
                   ]
               };
               respondCanvas();
        },
        error:function(){
	           alert('Chart1 error');
	         }
    });
};
var GetChartData2 = function () {
    $.ajax({
        url: 'reportServlet?param=graph2',
        method: 'GET',
        dataType: 'json',
        async:false,
        success: function (d) {
        	console.log(d);
           chartData2 = {
                   labels: d.yAxis, 
                   datasets: [
                       {
                           data: d.xAxis,
                           //hoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                           //label: false,
                           fill: false,
                           lineTension: 0.1,
                           backgroundColor: [
                        	   'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderColor: [
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderWidth: 1
                       }
                   ]
               };
               respondCanvas2();
        },
        error:function(){
	           alert('Chart2 error');
	         }
    });
};

var GetChartData3 = function () {
    $.ajax({
        url: 'reportServlet?param=graph3',
        method: 'GET',
        dataType: 'json',
        async:false,
        success: function (d) {
        	console.log(d);
           chartData3 = {
                   labels: d.yAxis, 
                   datasets: [
                       {
                           data: d.xAxis,
                           //hoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                           //label: false,
                           fill: false,
                           lineTension: 0.1,
                           backgroundColor: [
                        	   'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderColor: [
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderWidth: 1
                       }
                   ]
               };
               respondCanvas3();
        },
        error:function(){
	           alert('Chart3 error');
	         }
    });
};

var GetChartData4 = function () {
    $.ajax({
        url: 'reportServlet?param=graph4',
        method: 'GET',
        dataType: 'json',
        async:false,
        success: function (d) {
        	console.log(d);
           chartData4 = {
                   labels: d.yAxis, 
                   datasets: [
                       {
                           data: d.xAxis,
                           //hoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                           //label: false,
                           fill: false,
                           lineTension: 0.1,
                           backgroundColor: [
                        	   'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderColor: [
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderWidth: 1
                       }
                   ]
               };
               respondCanvas4();
        },
        error:function(){
	           alert('Chart4 error');
	         }
    });
};

var GetChartData5 = function () {
    $.ajax({
        url: 'reportServlet?param=graph5',
        method: 'GET',
        dataType: 'json',
        async:false,
        success: function (d) {
        	console.log(d);
           chartData5 = {
                   labels: d.yAxis, 
                   datasets: [
                       {
                           data: d.xAxis,
                           //hoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                           //label: false,
                           fill: false,
                           lineTension: 0.1,
                           backgroundColor: [
                        	   'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderColor: [
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderWidth: 1
                       }
                   ]
               };
               respondCanvas5();
        },
        error:function(){
	           alert('Chart5 error');
	         }
    });
};

var GetChartData6 = function () {
    $.ajax({
        url: 'reportServlet?param=graph6',
        method: 'GET',
        dataType: 'json',
        async:false,
        success: function (d) {
        	console.log(d);
           chartData6 = {
                   labels: d.yAxis, 
                   datasets: [
                       {
                           data: d.xAxis,
                           //hoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                           //label: false,
                           fill: false,
                           lineTension: 0.1,
                           backgroundColor: [
                        	   'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderColor: [
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255,99,132,1)',
                               'rgba(54, 162, 235, 1)',
                               'rgba(255, 206, 86, 1)',
                               'rgba(75, 192, 192, 1)',
                               'rgba(153, 102, 255, 1)',
                               'rgba(255, 159, 64, 1)'
                           ],
                           borderWidth: 1
                       }
                   ]
               };
               respondCanvas6();
        },
        error:function(){
	           alert('Chart6 error');
	         }
    });
};


$(document).ready(function () {
	$("input[id='RunsP']").prop('checked', true);
	$("input[id='RunsT']").prop('checked', true);
	
	GetChartData();
	GetChartData2();
	GetChartData3();
	GetChartData4();
	GetChartData5();
	GetChartData6();

	
});
</script>
<style>
		
	</style>
</head>
<body>
<div class="container playerPage">
	<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="http://localhost:8080/Crime/Engine.jsp">Crime</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="http://localhost:8080/Crime/Engine.jsp">Home</a></li>
        <li><a href="http://localhost:8080/Crime/reportServlet">Report</a></li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</div>
	<br/><br/>
        <div class="container" id="full_page">
			<div style="padding:40px 0px 0px 20px; height: 350px; width:500px">
			<span>Number of crime in each City</span>
			<div id="canvas">
			 	<canvas id="myChart1"></canvas>
			</div>
			</div>
			
			<div style="padding:10px 0px 0px 20px; height: 350px; width:500px">
			<span>No of killed in each city by crimes</span>
			<div id="canvas">
			 	<canvas id="myChart2"></canvas>
			</div>
			</div>
			
			<div style="padding:10px 0px 0px 20px; height: 350px; width:500px">
			<span>No of injured in each city by crimes</span>
			<div id="canvas">
			 	<canvas id="myChart3"></canvas>
			</div>
			</div>
			
			<div style="padding:10px 0px 0px 20px; height: 350px; width:500px">
			<span>No of frauds in each city</span>
			<div id="canvas">
			 	<canvas id="myChart4"></canvas>
			</div>
			</div>
			
			<div style="padding:10px 0px 0px 20px; height: 350px; width:500px">
			<span>No. of accidents</span>
			<div id="canvas">
			 	<canvas id="myChart5"></canvas>
			</div>
			</div>
			
			<div style="padding:10px 0px 0px 20px; height: 350px; width:500px">
			<span>No of attacks</span>
			<div id="canvas">
			 	<canvas id="myChart6"></canvas>
			</div>
			</div>
			
			
		</div>
		
		</div>
		</div>
    </body>
</html>