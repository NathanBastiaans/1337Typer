<?php 
	$scriptsDir	= "assets/scripts/";

	$allScripts	= glob($scriptsDir . "*.txt");
	$random		= array_rand($allScripts);
	$file		= $allScripts[$random];

?>
<!DOCTYPE html>
<html>
	<head>
		<title> 1337 Typer </title>
		<meta charset="UTF-8">
		<link href="assets/css/style.css" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		
		<link rel='stylesheet'  href='assets/css/style.css' type='text/css' media='all' />
		
		<script type='text/javascript' src='http://code.jquery.com/jquery-2.1.1.min.js'></script>
		<script type='text/javascript' src='assets/js/functions.js'></script>
		
	</head>
	<body>
		<pre id="console"></pre>
		
		<script>
			typer.file	= '<?=$file;?>'; 
			typer.chars	= 2;
			typer.setText();
			
			$(document).ready(function () {
				$(document).keydown(function (key) {
					typer.write(key);
				});
			});
		</script>
		
	</body>
</html>