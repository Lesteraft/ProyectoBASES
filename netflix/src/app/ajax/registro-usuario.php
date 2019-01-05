<?php
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Methods: PUT, GET, POST");
   header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
   header("Access-Control-Allow-Headers: *");

   $input = json_decode(file_get_contents('php://input'), true);

   $conn = oci_connect('NETFLIX', 'oracle', 'localhost/xe');

   if (!$conn) {
      $e = oci_error();
      trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
   }


   $sql = "BEGIN registro_usuarios(cuentas_seq.nextval,null,".$input['planUsuario'].",'".$input['usuario']."','".$input['password']."',".$input['numero_tarjeta'].",".$input['cvc'].",TO_DATE('".$input['fecha_vencimiento']."', 'MM/YY')); END;";
   $stid = oci_parse($conn, $sql);
   oci_execute($stid);
   oci_commit($conn);

   echo json_encode($input);
?>
