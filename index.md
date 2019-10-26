---
layout: default
title: Match
files: |
 <script src="./resources/js/main.js"></script>
---
<div id='spinner'></div>
<div id='status'>0</div>
<div id='page' class="container-fluid" style="background-color: #f0f0f0; margin-bottom: 15px">
	<form>
		<div class="row">
			<div class="col-md">
				<h2>General</h2>
			</div>
		</div>
        <div class="row">
			<div class="col-md">
				<label class="mr-sm-2" for="matchNumber">Match Number</label>
				<input id="matchNumber" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
				 type="tel" class="form-control" placeholder="Match Number">
			</div>
			<div class="col-md">
				<label class="mr-sm-2" for="teamNumber">Team Number</label>
				<input id="teamNumber" maxlength="5" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
				 type="tel" class="form-control" placeholder="Team Number">
			</div>
		</div>
        <div class="row">
            <div class="col">
                <h1>Auto</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="autoBlocks">Blocks Delivered Under SkyBridge</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyBlockQuant(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="autoBlocks" maxlength="1" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyBlockQuant(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="autoSkystones">Skystones Delivered Under Skybridge</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifySkystoneQuant(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="autoSkystones" maxlength="1" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifySkystoneQuant(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
            </div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="autoPlace">Stones Placed On Foundation</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyPlaceQuant(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="autoPlace" maxlength="1" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyPlaceQuant(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
				<label class="mr-sm-2" style="display: block" for="autoSingular">Moved Foundation To Building Zone</label>
				<div id="autoSingular" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="autoScaleNo" class="btn btn-secondary">
						<input type="radio" value="0" name="autoScale" id="autoScaleNo" autocomplete="off"> No
					</label>
					<label id="autoScaleYes" class="btn btn-secondary">
						<input type="radio" value="1" name="autoScale" id="autoScaleYes" autocomplete="off"> Yes
					</label>
				</div>
			</div>
            <div class="col">
				<label class="mr-sm-2" style="display: block" for="autoSingular">Robot Parked</label>
				<div id="autoSingular" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="autoScaleNo" class="btn btn-secondary">
						<input type="radio" value="0" name="autoScale" id="autoScaleNo" autocomplete="off"> No
					</label>
					<label id="autoScaleYes" class="btn btn-secondary">
						<input type="radio" value="1" name="autoScale" id="autoScaleYes" autocomplete="off"> Yes
					</label>
				</div>
			</div>
        </div>
        </form>
        </div>