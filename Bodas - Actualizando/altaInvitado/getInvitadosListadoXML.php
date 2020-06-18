<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bodas";
$usuario   = "root";
$password  = "";



// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");


$sql = "SELECT * FROM `invitados`";
$resultado = mysqli_query($conexion,$sql);

$XML ='<?xml version="1.0" encoding="UTF-8"?>';
$XML .='<datos>';

while ($fila = mysqli_fetch_assoc($resultado)) {
    $XML .='<invitado>';
        $XML .='<dni>'.$fila["dni"].'</dni>';
        $XML .='<nombre>'.$fila["nombre"].'</nombre>';
        $XML .='<apellidos>'.$fila["apellidos"].'</apellidos>';
        $XML .='<direccion>'.$fila["direccion"].'</direccion>';
        $XML .='<numPersonas>'.$fila["numPersonas"].'</numPersonas>';
    $XML .='</invitado>';
}

$XML .='</datos>';

// Cabecera de respuesta indicando que el contenido de la respuesta es XML
header("Content-Type: text/xml");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


echo $XML;

mysqli_close($conexion);
?>