<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");

$input = json_decode(file_get_contents('php://input'), true);

 if(isset($input['nombre'])){
      // Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
     $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
     if (!$conn) {
         $e = oci_error();
         trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
     }

     $sql = "BEGIN
                UPLOAD_PELI
                    (
                        PELICULAS_SEQ.NEXTVAL, ".$input['clasificacion'].",1,1, '".$input['nombre']."','".$input['resenia']."',
                        TO_DATE('".$input['fecha']."', 'DD/MM/YYYY'), 0,'".$input['urlVideo']."','".$input['urlImagen1']."','".$input['urlImagen2']."'
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
