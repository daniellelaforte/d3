var years = []
var populateyears = function(){for(i=1970;i<2013;i++){
 years.push(i)
}}
populateyears()
console.log(years)

var infantMortality = [97.6,95.4,93.5,91.4,89.5,87.9,86.2,84.6,83.1,81.7,80,77.7,75.6,73.5,71.3,69.3,67.6,66.1,64.8,63.7,62.8,62.1,61.6,61.1,60.6,60,59,57.8,56.4,54.8,53.1,51.4,49.5,47.7,46,44.3,42.8,41.4,40.1,38.7,37.5,36.2,34.9]

var pcGDP = [801.5888807,867.156894,979.8339519,1170.805835,1324.030477,1447.38008,1546.995479,1719.324079,1990.019764,2272.367386,2514.564023,2535.878011,2468.929381,2480.457268,2530.006873,2614.862148,3040.824638,3399.902308,3741.442214,3860.391844,4268.008922,4408.05847,4646.917114,4654.562096,4924.128592,5368.369698,5405.302509,5313.178493,5219.963832,5340.641001,5440.873305,5339.002207,5475.573928,6072.363107,6755.179227,7219.754563,7728.313286,8605.154888,9318.486643,8726.796307,9457.951171,10356.46829,10444.17778]

var lifeExpectancy = [59.60427497,60.08567811,60.49712184,60.85937468,61.26545482,61.62783953,61.97483602,62.33080814,62.63152329,62.94082901,63.1874587,63.49436235,63.79771629,64.03137528,64.28853741,64.54180924,64.84161499,65.09477598,65.29803733,65.50920218,65.69022614,65.85546052,65.99153029,66.08084742,66.24998083,66.42680003,66.67692452,66.94885326,67.17903129,67.41013537,67.67776493,67.96939199,68.22002066,68.4744867,68.77780521,69.00836998,69.29914772,69.55476289,69.78654594,70.03892902,70.27451882,70.51435535,70.71323426]

var displayArray = []
var placeholder = []
var populateArray = function(x){
 for(i=0; i<x.length; i++){
   placeholder = []
   placeholder.push(years[i])
   placeholder.push(x[i])
   console.log(placeholder)
   displayArray.push(placeholder)
 }
 console.log(displayArray)
}
populateArray(infantMortality)


var w = 1200;
var h = 400;
var padding = 20;
var svg = d3.select("body")
           .append("svg")
           .attr("width", w)
           .attr("height", h);


var xScale = d3.scale.linear()
                    .domain([d3.min(displayArray, function(d) { return (d[0]); }), d3.max(displayArray, function(d) { return (d[0]); })])
                    .range([(0+20), w-20] );

var yScale = d3.scale.linear()
                    .domain([d3.min(displayArray, function(d) { return (d[1]); }), d3.max(displayArray, function(d) { return (d[1]); })])
                    .range([h-20, 0+20]);

var xAxis = d3.svg.axis()
                 .scale(xScale)
                 .orient("bottom")
                 .ticks(10)
                 .tickFormat(d3.format("d"));;  //Set rough # of ticks

var yAxis = d3.svg.axis()
                 .scale(yScale)
                 .orient("right")
                 .ticks(4);
 
var formatAsDate = d3.format("1");
svg.append("g")
   .attr("class", "axis")
   .attr("transform", "translate(0," + (h - padding) + ")")
   .call(xAxis);

svg.append("g")
   .attr("class", "axis")
   .attr("transform", "translate(" + padding + ",0)")
   .call(yAxis);


svg.selectAll("circle")
  .data(displayArray)
  .enter()
  .append("circle")
  .attr("cy", "150px")
  .attr("cx", "125px")
  .attr("r", 4)
  .attr("fill","white")
   .transition()
   .duration(1000)
   .attr("fill", "black")

   .transition()
   .duration(function(d, i){
   return i*100
   })
   .attr("cy", function(d){
   return yScale(d[1]);
  })  
  .attr("cx", function(d){
   return xScale(d[0]);
   })

  .transition()
  .duration(function(d, i){
   return i*100
   })
  .delay(6000)
  .attr("cy", "50px")
  .attr("cx", "375px")