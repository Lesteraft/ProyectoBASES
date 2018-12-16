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
    $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }

    $sql = "INSERT INTO tBL_PLATAFORMAS (CODIGO_PLATAFORMA, NOMBRE_PLATAFORMA) VALUES (4, 'iPhone')";
    $sql = "INSERT INTO TBL_CUENTAS (CODIGO_CUENTA, CODIGO_PLAN, CORREO, NUMERO_TARJETA, CODIGO_TARJETA, FECHA_VALIDEZ) VALUES(5, 1, 'os@gmail.com', 123456, 123, TO_DATE('11-23', 'MM-YY'))";
    $stid = oci_parse($conn, $sql);
    echo $sql;
    oci_execute($stid);
  /*  echo "<table border='1'>\n";
    while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
        echo "<tr>\n";
        foreach ($row as $item) {
            echo "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "") . "</td>\n";
        }
        echo "</tr>\n";
    }
    echo "</table>\n";*/
    oci_commit($conn);


?>
</body>
</html>