// Richard Wen
// rrwen.dev@gmail.com

var helpers = {};

helpers.mapText = function(id, textData) {
	
	// (info) Create info panel
	var svg = d3.select(id)
		.append("svg")
		.attr("id", "info")
		.attr("width", "35%")
		.attr("height", "50%")
		.style("position", "absolute")
		.style("bottom", 0)
		.style("right", 0)
		.style("z-index", 2);
		
	// (info_text) Add info panel text
	var text = svg.selectAll("text")
		.data(textData)
		.enter()
		.append("text");
	text
		.attr("id", function(d) { return d.id })
		.attr("text-anchor", "end")
		.attr("x", function(d) { return d.x; })
		.attr("y", function(d) { return d.y; })
		.style("opacity", 0)
		.transition()
		.delay(function(d, i) { return i * 300; })
		.duration(1500)
		.style("opacity", 1)
		.text(function(d) { return d.text; })
		.attr("fill", function(d) { return d.color || "#f5f5f5"; })
		.attr("font-size", function(d) { return d.size || "1.15vw"; })
		.attr("font-family", "sans-serif");
	return ({svg: svg, text: text});
};

helpers.formatDate = function(features, property) {
	var date, y, m, d, t;
	for (var i in features) {
		date = features[i].properties.DATE;
		y = date.substr(0, 4);
		m = date.substr(5, 2);
		d = date.substr(8, 2);
		t = date.substr(11, 8);
		features[i][property] = y + "-" + m + "-" + d + "T" + t;
	}
	return features;
};

helpers.fadeIn = function() {
	$(document).ready(function() {
		$("body")
			.css("display", "none")
			.fadeIn(3000);
	});
};
