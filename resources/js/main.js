$(document).ready(function () {
    var db = new PouchDB(localStorage.getItem('databaseName'));
    document.getElementById("Submit").onclick = async function () {
        var teamNumber = $('#teamNumber').val();
        var matchNumber = $('#matchNumber').val();
        var autoBlocks = parseInt($('#autoBlocks').val());
        var autoSkystones = parseInt($('#autoSkystones').val());
        var autoPlace = parseInt($('#autoPlace').val());
        var teleopBlocks = parseInt($('#teleopBlocks').val());
        var teleopPlaced = parseInt($('#teleopPlaced').val());
    
        var movedFoundation = parseInt($('input[name=movedFoundation]:checked').val());
        var parkedOnLine = parseInt($('input[name=parkedOnLine]:checked').val());
        var hasSkyscraper = parseInt($('input[name=hasSkyscraper]:checked').val());
        var capped = parseInt($('input[name=capped]:checked').val());
        var movedFoundationOut = parseInt($('input[name=movedFoundationOut]:checked').val());
        var parked = parseInt($('input[name=parked]:checked').val());
    
        var doc = {
            _id: `${matchNumber}_${teamNumber}`,
            scoutName: localStorage.getItem('scoutName'),
            autoBlocks,
            autoSkystones,
            autoPlace,
            teleopBlocks,
            teleopPlaced,
            movedFoundation: movedFoundation || 0,
            parkedOnLine: parkedOnLine || 0,
            hasSkyscraper: hasSkyscraper || 0,
            capped: capped || 0,
            movedFoundationOut: movedFoundationOut || 0,
            parked: parked || 0
        }
    
        if (localStorage.getItem('settingsCheck') == 1) {
            if (matchNumber && teamNumber) {
                try {
                    let docPut = await db.put(doc);
                    window.alert("Submitted!");
                    window.location.reload();
                } catch (err) {
                    if (err.status == 409) {
                        let old = await db.get(`${matchNumber}_${teamNumber}`);
                        doc._rev = old._rev;
                        let newDoc = await db.put(doc, { force: true });
                        window.alert("Updated!");
                        window.location.reload();
                    }
                }
            } else {
                window.alert("Fill all fields!")
            }
        } else {
            window.alert("Set settings first!")
        }
    }
});

function modifyAutoBlockQuant(val) {
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

function modifyAutoPlaceQuant(val) {
    var qty = document.getElementById('autoPlace').value;
    var new_qty = parseInt(qty, 10) + parseInt(val, 10);

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('autoPlace').value = new_qty;
    return new_qty;
}

function modifyTeleopBlockQuant(val) {
    var qty = document.getElementById('teleopBlocks').value;
    var new_qty = parseInt(qty, 10) + parseInt(val, 10);

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('teleopBlocks').value = new_qty;
    return new_qty;
}

function modifyTeleopPlaceQuant(val) {
    var qty = document.getElementById('teleopPlaced').value;
    var new_qty = parseInt(qty, 10) + parseInt(val, 10);

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('teleopPlaced').value = new_qty;
    return new_qty;
}