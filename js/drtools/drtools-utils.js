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