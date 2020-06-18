<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bodas";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$NIF = $_POST["txtNIF"];
$nombre = $_POST["txtNombre"];
$apellidos = $_POST["txtApellidos"];
$direccion = $_POST["txtDireccion"];
$numPersonas = $_POST["txtNumPersonas"];

//Decodifico el objeto invitado

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");
$resultado = mysqli_query($conexion,$sql);
$fila = $resultado->fetch_assoc();

$sql = "INSERT INTO invitados VALUES ("'$NIF','$nombre','$apellidos','$direccion','$numPersonas');"";
$resultado = mysqli_query($conexion,$sql);

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>