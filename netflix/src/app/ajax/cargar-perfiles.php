<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");

$input = json_decode(file_get_contents('php://input'), true);
$input['servidor'] = 'YES!';


$contenido = array();

// Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
$conn = oci_connect('NETFLIX', 'oracle', 'localhost/xe');
if (!$conn) {
   $e = oci_error();
   trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}
/*
$sql = ' SELECT *
         from tbl_perfiles
         where codigo_cuenta = '. $input["CODIGO_CUENTA"] ;
*/

$sql = ' SELECT *
         FROM TBL_PERFILES
         WHERE CODIGO_CUENTA = '.$input['CODIGO_CUENTA'] ;

$stid = oci_parse($conn, $sql);
oci_execute($stid);

while ($linea = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
   $contenido[] = $linea;
}

echo json_encode($contenido);





?>
