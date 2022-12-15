<?php 

include_once __DIR__ . '/../db/index.php';

$emptyCD = [];

if( !empty($_GET) && !empty($_GET['genre'])){
    
    foreach($database as $element){

        if( $element['genre'] == $_GET['genre']){
            
            $emptyCD[] = $element; 
        }
    };
}else{
    $emptyCD = $database;
}

header('Content-type: application/json');

echo json_encode( $emptyCD );

?>