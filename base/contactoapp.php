<?php
include("conexion.php");
$email = $_POST["email"];
$comentarios = $_POST["comentarios"];

mysql_query("INSERT INTO app_contacto (remitente, mensaje)values('".$email."', '".$comentarios."')",$link) or die ('Error al guardar los datos enviados: '.mysql_error());

echo "Muchas gracias ".$email;
echo "<br>";
echo "Tus comentarios fueron enviados: ".$comentarios;
?>