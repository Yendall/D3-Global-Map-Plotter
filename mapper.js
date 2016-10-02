document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        document.getElementById("file-content").value = contents;
    };
    reader.readAsText(file);

}



function getProportion(value) {
    if (between(value, 0, 30)) {
        return 1.0;
    }
    if (between(value, 30, 60)) {
        return 1.5;
    }
    if (between(value, 60, 100)) {
        return 2.0;
    }
    if (between(value, 100, 300)) {
        return 2.5;
    }
    if (between(value, 300, 500)) {
        return 3.0;
    }
    if (between(value, 500, 1000)) {
        return 4.0;
    }
    if (between(value, 1000, 2000)) {
        return 4.5;
    }
}

function setupMap() {

    var width = 960,
        height = 480;
    var projection = d3.geoEquirectangular()
        .scale(height / Math.PI)
        .translate([width / 2, height / 2]);
    var path = d3.geoPath()
        .projection(projection);
    var graticule = d3.geoGraticule();
    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "dank_meme");
    svg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "#151515");
    svg.append("path")
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path);

    d3.json("JSON/world-50m.json", function(error, world) {
        if (error) throw error;

        svg.insert("path", ".graticule")
            .datum(topojson.feature(world, world.objects.land))
            .attr("class", "land")
            .attr("d", path);

        svg.insert("path", ".graticule")
            .datum(topojson.mesh(world, world.objects.countries, function(a, b) {
                return a !== b;
            }))
            .attr("class", "boundary")
            .attr("d", path);
    });


    var places = JSON.parse([document.getElementById("file-content").value]);

    places.forEach(function(places) {


    });
    svg.selectAll(".pin").data(places)
        .enter().append("circle", ".pin")
        .style("fill", function(d) {
            return getColour(d.Goldstein);
        })
        .style("stroke", "#000")
        .style("stroke-width", 0.5)
        .attr("r", function(d) {
            return getProportion(d.Mentions);

        })
        .attr("transform", function(d) {
            return "translate(" + projection([
                    d.Longitude,
                    d.Latitude
                ]) + ")";
        });
}