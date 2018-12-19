<?php
 header('Access-Control-Allow-Origin: *');  
    if(isset($_POST['user'])){
        $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
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
            if($_POST['user'] === $linea['CORREO']) {
                if($_POST['password'] === $linea['CONTRASENIA']) {
                    $linea["codigo"] = 0;
                    echo json_encode($linea);
                    return;
                }
            }
        }

        echo '{"codigo":"1"}';

      
    }

 ?>