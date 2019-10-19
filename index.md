---
layout: default
title: Match
files: |
 <script src="./resources/js/match.js"></script>
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
        </form>
        </div>