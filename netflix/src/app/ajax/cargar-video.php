<?php
 header('Access-Control-Allow-Origin: *'); 
 $contenido = array(); 
    if(isset($_POST['id'])){
        $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }

        $sql = 'SELECT URL_VIDEO
                FROM TBL_PELICULAS
                WHERE CODIGO_PELICULA ='.$_POST['id'];
        $stid = oci_parse($conn, $sql);
        oci_execute($stid);
        $linea = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS);
        echo json_encode($linea);

      
    }

 ?>