d3.csv("Metacritic.csv", function(stats));

var body_selection = d3.select("body");

var svg = body_selection.append("svg")
  .attr("width", 50)
  .attr("height", 50);
  
var circle = svg.append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple");
  
var p = d3.select("body").selectAll("p")
		  .data(stats)
		  .enter()
		  .append("p")
		  .text("lol ");
		  