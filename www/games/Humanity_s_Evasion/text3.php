<?php
		$fichier3 = fopen('text3.txt', 'r+');

		$ligne3 = fgets($fichier3);
		$ligne3+=1;

		fseek($fichier3, 0);
		fputs($fichier3, $ligne3);

		fclose($fichier3);
		
		echo $ligne3;
?>