var w = 1200
var h = 400
var years = []
var populateyears = function(){for(i=1970;i<2013;i++){
years.push(i)
}}
populateyears()
console.log(years)

var infantMortality = [97.6,95.4,93.5,91.4,89.5,87.9,86.2,84.6,83.1,81.7,80,77.7,75.6,73.5,71.3,69.3,67.6,66.1,64.8,63.7,62.8,62.1,61.6,61.1,60.6,60,59,57.8,56.4,54.8,53.1,51.4,49.5,47.7,46,44.3,42.8,41.4,40.1,38.7,37.5,36.2,34.9]

var pcGDP = [801.5888807,867.156894,979.8339519,1170.805835,1324.030477,1447.38008,1546.995479,1719.324079,1990.019764,2272.367386,2514.564023,2535.878011,2468.929381,2480.457268,2530.006873,2614.862148,3040.824638,3399.902308,3741.442214,3860.391844,4268.008922,4408.05847,4646.917114,4654.562096,4924.128592,5368.369698,5405.302509,5313.178493,5219.963832,5340.641001,5440.873305,5339.002207,5475.573928,6072.363107,6755.179227,7219.754563,7728.313286,8605.154888,9318.486643,8726.796307,9457.951171,10356.46829,10444.17778]

var lifeExpectancy = [59.60427497,60.08567811,60.49712184,60.85937468,61.26545482,61.62783953,61.97483602,62.33080814,62.63152329,62.94082901,63.1874587,63.49436235,63.79771629,64.03137528,64.28853741,64.54180924,64.84161499,65.09477598,65.29803733,65.50920218,65.69022614,65.85546052,65.99153029,66.08084742,66.24998083,66.42680003,66.67692452,66.94885326,67.17903129,67.41013537,67.67776493,67.96939199,68.22002066,68.4744867,68.77780521,69.00836998,69.29914772,69.55476289,69.78654594,70.03892902,70.27451882,70.51435535,70.71323426]

var data = []
var placeholder = {}
var populateArray = function(x){
for(i=0; i<x.length; i++){
  placeholder = {}
  placeholder.x = years[i]
  placeholder.y = x[i]
  console.log(placeholder)
  data.push(placeholder)
}
console.log(data)
}
populateArray(lifeExpectancy)

var margin = {top: 20, right: 20, bottom: 40, left: 50},
   width = w - margin.left - margin.right,
   height = h - margin.top - margin.bottom;

var x = d3.scale.linear()
   .domain([1970, d3.max(data, function(d) { return d.x; })])
   .range([0, 800]);

var y = d3.scale.linear()
   .domain([58, d3.max(data, function(d) { return d.y; })])
   .range([(h-40), 0]);

var xAxis = d3.svg.axis()
   .scale(x)
   .orient("bottom");

var yAxis = d3.svg.axis()
   .scale(y)
   .orient("left");

var areaOut = d3.svg.area()
   .x(function(d) { return x(d.x); })
   .y0(height)
   .y1(function(d) { return y(d.y); });

var svg = d3.select("body").append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
   .append("g")
   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("path")
   .datum(data)
   .attr("class", "area")
   .attr("d", areaOut);

// var formatAsDate = d3.format("1");
svg.append("g")
   .attr("class", "x axis")
   .attr("transform", "translate(0," + height + ")")
   .call(xAxis);

svg.append("g")
   .attr("class", "y axis")
   .call(yAxis);