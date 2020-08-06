function calculateRating(value) {
    var factor = 1;
    if (value <= 10000) 
        factor = 100;
    else if (value > 10000 && value <= 100000) 
        factor = 1000;
    else if (value >= 100000 && value <= 1000000) 
        factor = 10000;
    else if (value >= 1000000) 
        factor = 100000;

    return value / factor;
}

function returnFactorUsed(value) {
    var factor = '1';
    if (value <= 10000) 
        factor = '100';
    else if (value > 10000 && value <= 100000) 
        factor = '1,000';
    else if (value >= 100000 && value <= 1000000) 
        factor = '10,000';
    else if (value >= 1000000) 
        factor = '100,000';

    return factor;
}

function getFullUrl(file) {
    pathArray = window.location.pathname.split( '/' );
    indexOfSegment = pathArray.indexOf(file);
    baseUrl = window.location.origin + pathArray.slice(0,indexOfSegment).join('/') + '/';
    var baseFile = file.slice(1, file.length); 
    var fullUrl = baseUrl + baseFile; 
    return fullUrl;
}

function doesFileExist(file) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', getFullUrl(file), false);
    xhr.send();
     
    if (xhr.status == "404") 
        return false;
    return true;
}

