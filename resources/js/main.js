$(document).ready(function () {
    
});

function modifyBlockQuant(val) {
    var qty = document.getElementById('autoBlocks').value;
    var new_qty = parseInt(qty, 10) + parseInt(val, 10);

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('autoBlocks').value = new_qty;
    return new_qty;
}

function modifySkystoneQuant(val) {
    var qty = document.getElementById('autoSkystones').value;
    var new_qty = parseInt(qty, 10) + parseInt(val, 10);

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('autoSkystones').value = new_qty;
    return new_qty;
}

function modifyPlaceQuant(val) {
    var qty = document.getElementById('autoPlace').value;
    var new_qty = parseInt(qty, 10) + parseInt(val, 10);

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('autoPlace').value = new_qty;
    return new_qty;
}