<?php
 header('Access-Control-Allow-Origin: *');
 if(isset($_POST['nombre'])){
      // Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
     $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
     if (!$conn) {
         $e = oci_error();
         trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
     }
     
     // $sql = 'EXECUTE registro_usuarios(cuentas_seq.nextval,'.$_POST["planUsuario"].',"'.$_POST["usuario"].'","'.$_POST["password"].'",'.$_POST["numero_tarjeta"].','.$_POST["cvc"].',TO_DATE("'.$_POST["fecha_vencimiento"].'", "MM/YY")';
     $sql = "BEGIN
                POSTEAR_PELICULA 
                    (
                        PELICULAS_SEQ.NEXTVAL, 1,'".$_POST['clasificacion']."', 1, '".$_POST['nombre']."','".$_POST['resenia']."', 
                        TO_DATE('".$_POST['fecha']."', 'DD/MM/YYYY'), 0,'".$_POST['urlVideo']."','".$_POST['urlImagen1']."'
                    );
            END;";
     $stid = oci_parse($conn, $sql);
     oci_execute($stid);
     oci_commit($conn);
     echo '{"mensaje":"exito"}';
     

 }else{
    echo '{"mensaje":"fracaso"}';
 }
?>