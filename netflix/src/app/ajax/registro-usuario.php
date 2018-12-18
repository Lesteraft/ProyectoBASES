<?php
    header('Access-Control-Allow-Origin: *');
    if(isset($_POST['usuario'])){
         // Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
        $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
        $sql = "BEGIN registro_usuarios(cuentas_seq.nextval,".$_POST["planUsuario"].",'".$_POST["usuario"]."','".$_POST["password"]."',".$_POST["numero_tarjeta"].",".$_POST["cvc"].",TO_DATE('".$_POST["fecha_vencimiento"]."', 'MM/YY')); END;";
        $stid = oci_parse($conn, $sql);
        oci_execute($stid);
        oci_commit($conn);

    }
    
?>