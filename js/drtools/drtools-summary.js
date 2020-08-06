
if (!optionsProject.datasetSummary || 0 === optionsProject.datasetSummary.length === ''
            || !doesFileExist(optionsProject.datasetSummary)) {
        var infoType = d3.select("#numberTypes")
        .html("0");

        var infoNamespace = d3.select("#numberNamespaces")
        .html("0");

        var infoSLOC = d3.select("#numberSLOC")
        .html("0");

        var infoMethod = d3.select("#numberMethods")
        .html("0");
}
else {
    d3.csv(optionsProject.datasetSummary, function(data) {
        listSummary = data.map(function(d) {
        return[d["description"],
            +d["value"],
            +d["percent"]]
            });
        
        var namespaces = listSummary[0][1];
        var percentNamespaces = listSummary[0][2];

        var types = listSummary[1][1];
        var typesPerNamespaces = listSummary[1][2];

        var slocs = listSummary[2][1];
        var slocsPerTypes = listSummary[2][2];

        var methods = listSummary[3][1];
        var methodsPerTypes = listSummary[3][2];

        var cyclos = listSummary[4][1];
        var cyclosPerTypes = listSummary[4][2];

        var infoType = d3.select("#numberTypes")
            .html(types);

        var infoNamespace = d3.select("#numberNamespaces")
        .html(namespaces);

        var infoSLOC = d3.select("#numberSLOC")
        .html(slocs);

        var infoMethod = d3.select("#numberMethods")
        .html(methods);
    });
}    