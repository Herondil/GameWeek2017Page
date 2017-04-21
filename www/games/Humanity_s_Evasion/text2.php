<?php
		$fichier2 = fopen('text2.txt', 'r+');

		$ligne2 = fgets($fichier2);
		$ligne2+=1;

		fseek($fichier2, 0);
		fputs($fichier2, $ligne2);

		fclose($fichier2);
		
		echo $ligne2;
?>