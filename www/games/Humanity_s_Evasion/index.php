<!DOCTYPE html>
<html id='HTML'>
	<head>
		<meta charset="utf-8">
		<title>Humanity's Evasion</title>
		<meta name="Content-Language" content="fr">
		<meta name="Description" content="Jeu de gestion en HTML5. Créer pour la Game Week de 2017 à l'École Multimédia">
		<meta name="keywords" content="jeu de gestion, jeu navigateur, game week">
		<meta name="Subject" content="Jeu de gestion en HTML5">
		<meta name="Author" content="Grégor ECORCE, Nicolas CELLA, Tanguy OLIVES, Marius THIEBAULT">
		<link rel="stylesheet" href="css/game.css">
	</head>
    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

    <script type="text/javascript">
    $(window).load(function() {
        $(".loader").fadeOut("1000");
    })
    </script>

	<body>
        <div class="loader"></div>
		<div class="responsive"><p class="TextR">Afin de Jouer au jeu, veuillez agrandir votre fenêtre !</p><img class="ImgR" src="img/ajax-loader.gif"></div>

		<script src="js/three.min.js"></script>
		<script src="js/game.js"></script>
		

		<script type="text/javascript">

        
     	
     	function choix1(){
            $.ajax({
                type: 'POST',
                url: 'text1.php',
                success: function(data) {
                    $("#T1").text(data);
                }
            });
		};
		function choix2(){
            $.ajax({
                type: 'POST',
                url: 'text2.php',
                success: function($ligne2) {
                    $("#T2").text($ligne2);
                }
            });
		};
		function choix3(){
            $.ajax({
                type: 'POST',
                url: 'text3.php',
                success: function($ligne3) {
                    $("#T3").text($ligne3);
                }
            });
		};
		function pourcentage(){
            $.ajax({
                type: 'GET',
                url: 'pourcentage.php',
                success: function(data) {
                    $(".FinalP").text(data);
                }
            });
		};
	</script>
	</body>
</html>