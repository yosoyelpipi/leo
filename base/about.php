<?php
include("conexion.php");
$email = $_POST["leermas"];
mysql_query("INSERT INTO app_about (email)values('".$email."')",$link) or die ('Error al querer insertar el email, porque: '.mysql_error());

?>
		<p>Creador de MascotasVQR.com</p>
		<p>Desarrollador de app para android</p>
		<p>Diseñador web</p>
		<p>Consultor en Itris Software</p>
		<p>Desarrollador en Itris Software</p>