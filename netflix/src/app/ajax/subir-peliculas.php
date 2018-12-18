<?php
 header('Access-Control-Allow-Origin: *');
 if(isset($_POST['usuario'])){
      // Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
     $conn = oci_connect('NETFLIX', 'oracle', 'localhost/XE');
     if (!$conn) {
         $e = oci_error();
         trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
     }

     // $sql = 'EXECUTE registro_usuarios(cuentas_seq.nextval,'.$_POST["planUsuario"].',"'.$_POST["usuario"].'","'.$_POST["password"].'",'.$_POST["numero_tarjeta"].','.$_POST["cvc"].',TO_DATE("'.$_POST["fecha_vencimiento"].'", "MM/YY")';
     $sql = "BEGIN UPLOAD_PELI(peliculas_seq.nextval, 1, ".$_POST["clasificacion"].", 1, '".$_POST["nombre"]."', '".$_POST["resenia"]."',TO_DATE('".$_POST["fecha"]."', 'DD/MM/YYY'), 0,'".$_POST["urlVideo"]."', '".$_POST["urlImagen1"]."', '".$_POST["urlImagen2"]."'); END;";
     $stid = oci_parse($conn, $sql);
     oci_execute($stid);
 /*  echo "<table border='1'>\n";
     while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
         echo "<tr>\n";
         foreach ($row as $item) {
             echo "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "") . "</td>\n";
         }
         echo "</tr>\n";
     }
     echo "</table>\n";*/
     oci_commit($conn);

 }
?>