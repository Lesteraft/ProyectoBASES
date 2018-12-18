<?php
 header('Access-Control-Allow-Origin: *');  
    if(isset($_POST['user'])){
        $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }

        $sql = 'SELECT CORREO, CONTRASENIA FROM TBL_CUENTAS ORDER BY CODIGO_CUENTA';
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