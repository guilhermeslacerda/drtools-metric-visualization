
d3.csv(optionsProject.datasetSummary, function(data) {
    listSummary = data.map(function(d) {
    return[d["description"],
        +d["value"],
        +d["percent"]]
        });
    
    var types = listSummary[0][1];
    var typesPerNamespaces = listSummary[0][2];
    var namespaces = Math.trunc(types / typesPerNamespaces) 
    
    var slocs = listSummary[1][1];
    var slocsPerTypes = listSummary[1][2];

    var methods = listSummary[2][1];
    var methodsPerTypes = listSummary[2][2];

    var cyclos = listSummary[3][1];
    var cyclosPerTypes = listSummary[3][2];

    var infoType = d3.select("#numberTypes")
        .html(types);

    var infoNamespace = d3.select("#numberNamespaces")
    .html(namespaces);

    var infoSLOC = d3.select("#numberSLOC")
    .html(slocs);

    var infoMethod = d3.select("#numberMethods")
    .html(methods);
});
	
