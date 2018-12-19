<?php
    header('Access-Control-Allow-Origin: *');
    $contenido = array();
    $tamaño = 0;
    if(isset($_POST['accion'])){
         // Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
        $conn = oci_connect('NETFLIX', 'oracle', 'localhost/xe');
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
        $sql = "SELECT * FROM TBL_PERFILES";
        $stid = oci_parse($conn, $sql);
        oci_execute($stid);
        oci_commit($conn);
        while ($linea = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
            $contenido[] = $linea;
            $tamaño++;
        }
        $contenido['length'] = $tamaño;
        echo json_encode($contenido);

    }
?>