

var dataset = [14788798.31,15957192.52,16822109.48,16850822.09,16745791.87,17726098.32,18316474.32,18535291.54,19567247.68,19357759.3,18763312.93,18613974.36,18538731.19,19206620.23,19782702.26,20385014.35,20892442.81,21645464.92,22112277.69,22200872.41,22476920.5,22245298.12,22227571.84,22626105.07,23114109.43,23666825.33,24055520,24238870,24191199,24799921,25408643,25639664,27154135,28543928,29614692,30667121,31286844,32049580,33516380,34649483];

var years = []
var populateyears = function(){for(i=1970;i<2010;i++){
 years.push(i)
}}
populateyears()
console.log(years.length)
console.log(dataset.length)


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
populateArray(dataset)



//Width and height
            var w = 1200;
            var h = 400;
            var barPadding = 10;
            var padding = 0;

               //Create SVG element
            var svg = d3.select("div")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        // var xScale = d3.scale.linear()
        //             .domain([d3.min(displayArray, function(d) { return (d[0]); }), d3.max(displayArray, function(d) { return (d[0]); })])
        //             .range([(0+20), w-20] );

        // var yScale = d3.scale.linear()
        //             .domain([d3.min(displayArray, function(d) { return (d[1]); }), d3.max(displayArray, function(d) { return (d[1]); })])
        //             .range([h-20, 0+20]);

        // var xAxis = d3.svg.axis()
        //          .scale(xScale)
        //          .orient("bottom")
        //          .ticks(10)
        //          .tickFormat(d3.format("d"));;  //Set rough # of ticks

        // var yAxis = d3.svg.axis()
        //          .scale(yScale)
        //          .orient("right")
        //          .ticks(5);

        // var formatAsDate = d3.format("1");
        //     svg.append("g")
        //         .attr("class", "axis")
        //         .attr("transform", "translate(0," + (h - padding) + ")")
        //         .call(xAxis);

        //     svg.append("g")
        //         .attr("class", "axis")
        //         .attr("transform", "translate(" + padding + ",0)")
        //         .call(yAxis);
            
         

            svg.selectAll("rect")
               .data(dataset)
               .enter()
               .append("rect")
               .attr("x", function(d, i) {
                    return i * (w / dataset.length);
               })
               .attr("y", function(d) {
                    return h - (d/200000 * 2) -50;
               })
               .attr("width", w / dataset.length - barPadding)
               .attr("height", function(d) {
                    return d/200000 * 2;
               })
               .attr("fill", "red");



               d3.selectAll("rect")
                    .transition()
                    .duration(2000)
                    .attr("fill", "green")

                d3.selectAll("rect")
                    .transition()
                    .duration(4000)
                    .attr("fill", "blue")

             // d3.selectAll("rect")
             //        .transition()
             //        .delay(function(d, i) {
             //        return i * 100;
             //            })
             //        .duration(3000)
             //        .attr("width", "50%")




  
