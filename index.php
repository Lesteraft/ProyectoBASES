<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php

    // Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
     // Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
     $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
     if (!$conn) {
         $e = oci_error();
         trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
     }

     $sql = "SELECT CORREO, CONTRASENIA FROM TBL_CUENTAS ORDER BY CODIGO_CUENTA";
     $stid = oci_parse($conn, $sql);
     oci_execute($stid);
     $registros = array();
     while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
         $registros[] = $row;
     }

     echo var_dump($registros);

     oci_commit($conn);
?>
</body>
</html>