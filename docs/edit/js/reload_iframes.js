// Richard Wen
// rrwen.dev@gmail.com

// (reload_leaflet) Reload iframes on section visible
window.onload = function() {
	
	// (maps) Leaflet maps to reload
	var iframes = [
		{section: "frequent", src: "./edit/visuals/ksi_cluster.html", type: "iframe"},
		{section: "non-random", src: "./edit/visuals/ksi_heat.html", type: "iframe"},
		{section: "situational", src: "./edit/visuals/ksi_bar.html", type: "iframe"}
	];
	
	// (reload) Reload function
	var reload = function(section, src, type) {
		Reveal.addEventListener(section, function() {
			var iframe = $(type + "[src='" + src + "']");
			iframe.attr("src", src);
			iframe.css("display", "none").fadeIn(3000);
		});
	}
	
	// (listen) Listen to slides and reload
	var section, src, type;
	for (let i in iframes) {
		section = iframes[i].section;
		src = iframes[i].src;
		type = iframes[i].type;
		reload(section, src, type);
	}
};