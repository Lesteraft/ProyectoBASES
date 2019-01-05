<?php

session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");


$respuesta = array();

if(!isset($_SESSION['USUARIO'])){
   $respuesta['codigo'] = 1;
   echo json_encode($_SESSION);
} else {
   $respuesta['codigo'] = 0;
   echo json_encode($respuesta);
}

?>
