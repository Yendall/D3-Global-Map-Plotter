

function getColour(value) {
    switch(value) {
        case -10:
            return "#FF192E";
            break;
        case -9:
            return "#FD221E";
            break;
        case -8:
            return "#FC3E23";
            break;
        case -7:
            return "#FA5928";
            break;
        case -6:
            return "#F9722C";
            break;
        case -5:
            return "#F78B31";
            break;
        case -4:
            return "#F6A135";
            break;
        case -3:
            return "#F4B739";
            break;
        case -2:
            return "#F3CB3E";
            break;
        case -1:
            return "#F1DE42";
            break;
        case 0:
            return "#F0F046";
            break;
        case 1:
            return "#DDEF4A";
            break;
        case 2:
            return "#CBED4F";
            break;
        case 3:
            return "#BAEC53";
            break;
        case 4:
            return "#AAEA57";
            break;
        case 5:
            return "#9CE95B";
            break;
        case 6:
            return "#8EE75E";
            break;
        case 7:
            return "#82E662";
            break;
        case 8:
            return "#77E466";
            break;
        case 9:
            return "#6DE36A";
            break;
        case 10:
            return "#6EE277";
            break;
        default:
        return null
    }
}

function between(x, min, max) {
    return x >= min && x <= max;
}