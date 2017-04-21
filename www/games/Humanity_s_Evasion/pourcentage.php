<?php
		$fichier = fopen('text1.txt', 'r+');

		$ligne = fgets($fichier);
		$ligne+=0;

		fseek($fichier, 0);
		fputs($fichier, $ligne);

		fclose($fichier);
		
///////////////////////////////////

		$fichier2 = fopen('text2.txt', 'r+');

		$ligne2 = fgets($fichier2);
		$ligne2+=0;

		fseek($fichier2, 0);
		fputs($fichier2, $ligne2);

		fclose($fichier2);
		
				
///////////////////////////////////

		$fichier3 = fopen('text3.txt', 'r+');

		$ligne3 = fgets($fichier3);
		$ligne3+=0;

		fseek($fichier3, 0);
		fputs($fichier3, $ligne3);

		fclose($fichier3);

		
///////////////////////////////////			
		$c1 = $ligne;
		$c2 = $ligne2;
		$c3 = $ligne3;

		$ccumule = $c1 + $c2 + $c3;

		$p1 = 100 * $c1 / $ccumule;
		$p2 = 100 * $c2 / $ccumule;
		$p3 = 100 * $c3 / $ccumule;

		$C1arrondi = round($p1 * 2, 0) / 2;
		$C2arrondi = round($p2 * 2, 0) / 2;
		$C3arrondi = round($p3 * 2, 0) / 2;

		echo $C1arrondi.'%➖➖➖'.$C2arrondi.'%➖➖➖'.$C3arrondi.'%';
?>