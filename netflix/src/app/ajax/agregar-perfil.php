<?php
    header('Access-Control-Allow-Origin: *');
    if(isset($_POST['nombre'])){
         // Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
        $conn = oci_connect('NETFLIX', 'oracle', 'localhost/xe');
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
        $sql = "BEGIN crear_perfil(perfiles_seq.nextval, 1, ".$_POST["codigo_cuenta"].",'".$_POST["nombre"]."'); END;";
        $stid = oci_parse($conn, $sql);
        oci_execute($stid);
        oci_commit($conn);

        echo '{"mensaje":"exito"}'

    }
?>