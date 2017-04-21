<?php
		$fichier = fopen('text1.txt', 'r+');

		$ligne = fgets($fichier);
		$ligne+=1;

		fseek($fichier, 0);
		fputs($fichier, $ligne);

		fclose($fichier);

		echo $ligne;
?>