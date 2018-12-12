<?php
 header('Access-Control-Allow-Origin: *');  
    if(isset($_POST['id'])){
        if(file_exists('../../assets/data/video.json')) {
            $archivo = fopen('../../assets/data/video.json', 'r');
            while($linea = fgets($archivo)){
                $registro = json_decode($linea, true);
                if($registro['id'] === $_POST['id']){
                    break;
                }
            }
            //fclose($archivo);
            echo json_encode($registro);
        }else
        echo '{"error":"1"}';


    }
    

?>