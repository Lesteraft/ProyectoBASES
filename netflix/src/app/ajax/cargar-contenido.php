<?php
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Methods: PUT, GET, POST");
   header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
   header("Access-Control-Allow-Headers: *");

   // get the HTTP method, path and body of the request

   // $input = json_decode(file_get_contents('php://input'), true);
   // echo json_encode($input);



   $contenido = array();
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
 ?>
