<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");

$input = json_decode(file_get_contents('php://input'), true);

$contenido = array();
//Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
$conn = oci_connect('NETFLIX', 'oracle', 'localhost/xe');
if (!$conn) {
   $e = oci_error();
   trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$sql = " begin
            crear_perfil( PERFILES_SEQ.NEXTVAL, 1, 1, 1, ". $input['codigo_cuenta'] .", 1, '".$input['nombre']."', './assets/img/perfil/001.png');
         end;";

$stid = oci_parse($conn, $sql);
oci_execute($stid);
oci_commit($conn);

echo '{"mensaje":"exito"}';



?>
