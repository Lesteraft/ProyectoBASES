<?php
 header('Access-Control-Allow-Origin: *'); 
 $contenido = array(); 
    if(isset($_POST['accion'])){
        $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }

        $sql = 'SELECT *
                FROM TBL_PELICULAS';
        $stid = oci_parse($conn, $sql);
        oci_execute($stid);
        while ($linea = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
                $contenido[] = $linea;
        }

        echo json_encode($contenido);

      
    }

 ?>