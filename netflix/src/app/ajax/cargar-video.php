<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");

$input = json_decode(file_get_contents('php://input'), true);

 $contenido = array();
    if(isset($input['id'])){
        $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }

        $sql = 'SELECT URL_VIDEO
                FROM TBL_PELICULAS
                WHERE CODIGO_PELICULA ='.$input['id'];
        $stid = oci_parse($conn, $sql);
        oci_execute($stid);
        $linea = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS);
        echo json_encode($linea);


    }

 ?>
