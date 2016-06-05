<?php
require('config.php');

$sql = "
SELECT 
	hs.*, 
	@curRow := @curRow + 1 AS rank 
FROM `high_scores` hs 
JOIN (SELECT @curRow := 0) r 
ORDER BY `score` DESC 
LIMIT 10";

$result = $dbc->query($sql);
?>
<!DOCTYPE html>
<html>
<head>
	<title>Color Game</title>
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
</head>
<body>
	<div data-role="page" id="homePage">
		<div data-role="header">
			<h1>Color Game</h1>
		</div>

		<div data-role="main" class="ui-content">
			<h1>High Scores</h1>
			<p id="canvas">
				<table data-role="table" data-mode="columntoggle" class="ui-responsive">
					<thead>
					<tr>
						<th>Rank</th>
						<th data-priority="1">Name</th>
						<th data-priority="2">Score</th>
					</tr>
					</thead>
					<tbody>
				<?php
				if($result) { 
					while($info = $result->fetch_array()) { ?>
						<tr>
							<td><?php echo $info['rank']; ?></td>
							<td><?php echo $info['name']; ?></td>
							<td><?php echo $info['score']; ?></td>
						</tr>
					<?php
					}
				} else {
					echo "Failed: " + $sql;
				}
				?>
				</tbody>
				</table>
			</p>
			<div class="text-centered">
				<a class="ui-btn play-btn" href="index.html">Quit</a>
			</div>
		</div>

		<div data-role="footer">
			<h1>Color Game</h1>
		</div>
	</div>


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
	<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
</body>
</html>


