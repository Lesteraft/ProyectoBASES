<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");

$input = json_decode(file_get_contents('php://input'), true);

session_start();


$conn = oci_connect('NETFLIX', 'oracle', 'localhost/xe');
if (!$conn) {
   $e = oci_error();
   trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$sql = 'SELECT A.CODIGO_CUENTA,
              A.CORREO,
              A.CONTRASENIA,
              A.NUMERO_TARJETA,
              B.NOMBRE_PLAN
       FROM TBL_CUENTAS A
       INNER JOIN TBL_PLANES B
       ON A.CODIGO_PLAN = B.CODIGO_PLAN';
$stid = oci_parse($conn, $sql);
oci_execute($stid);


while ($linea = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
   if($input['usuario'] === $linea['CORREO']) {
       if($input['contraseña'] === $linea['CONTRASENIA']) {
           $linea["codigo"] = 0;
           $_SESSION['USUARIO'] = $input['usuario'];
           $_SESSION['CONTRASENIA'] = $input['contraseña'];
           echo json_encode($linea);
           return;
       }
   }
}

echo '{"codigo":"1"}';

?>
