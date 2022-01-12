<html>
<head>
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Luxurious+Roman|Orelega+One|Bebas+Neue|Lobster|Comfortaa">
<link rel="stylesheet" href="/css/style.css" />
</head>
<body>
<main>


	<form>
	<fieldset>
	<legend>Choose a Dog: </legend>
	
		<label> <span>Raça:</span> <select name="breed">
        	<?php foreach ($breeds as $breed):?>
        	<option><?= $breed?></option>
        	<?php endforeach;?>
        </select>
		</label> <label> <span>Cor da fonte:</span> <select name="color">
				<option>Tomato</option>
				<option>Orange</option>
				<option>DodgerBlue</option>
				<option>MediumSeaGreen</option>
				<option>SlateBlue</option>
		</select>
		</label> <label> <span>Fonte:</span> <select name="font">
				<option>Luxurious Roman</option>
				<option>Orelega One</option>
				<option>Bebas Neue</option>
				<option>Lobster</option>
				<option>Comfortaa</option>
		</select>
		</label> <label> <span>Name:</span> <input type="text" name="name" />
		</label>
		<div id="docPics"></div>

		<button type="submit">Submit</button>

</fieldset>
	</form>
	<div id="choice-result">
		<h1></h1>
	</div>
	</main>

	

	<script src="/js/scripts.js"></script>

</body>
</html>
