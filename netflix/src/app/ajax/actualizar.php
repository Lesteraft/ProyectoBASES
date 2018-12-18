<?php
    header('Access-Control-Allow-Origin: *');
   // echo json_encode($_POST);
    switch($_POST['codigo']){
        case 1:{
            header('Access-Control-Allow-Origin: *');
   // echo json_encode($_POST);
            $conexión = oci_connect('NETFLIX', 'oracle', 'localhost/xe');
            if (!$conexión) {
                $e = oci_error();
                trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
            }

            // Preparar la sentencia
            $stid = oci_parse($conexión, 'SELECT CODIGO_PELICULA, NOMBRE_PELICULA, RESENIA, ANIO_ESTRENO, URLVIDEO, URLIMAGEN FROM TBL_PELICULAS');
            if (!$stid) {
                $e = oci_error($conexión);
                trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
            }

            // Realizar la lógica de la consulta
            $r = oci_execute($stid);
            if (!$r) {
                $e = oci_error($stid);
                trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
            }

            // Obtener los resultados de la consulta
            $totalPeticion;
            $indice = 0;
            while ($fila = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
                $totalPeticion[$indice] = ($fila);        
                //print json_encode($indice);
                $indice = $indice + 1;
            }

            //print json_encode($clases);
            echo json_encode($totalPeticion);
            oci_free_statement($stid);
            oci_close($conexión);
    
    
        }
    }
?>