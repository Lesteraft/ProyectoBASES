<?php
    header('Access-Control-Allow-Origin: *');
    if(isset($_POST['codigo_pelicula'])){
         // Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
        $conn = oci_connect('NETFLIX', 'oracle', 'localhost/xe');
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
        $sql = "BEGIN ELIMINAR_PELICULA (".$_POST['codigo_pelicula']."); end;";
        $stid = oci_parse($conn, $sql);
        oci_execute($stid);
        oci_commit($conn);

        echo '{"mensaje": "exito"}';
    }
    
?>