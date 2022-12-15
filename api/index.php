<?php 

include_once __DIR__ . '/../db/index.php';

$emptyCD = [];

foreach($database as $element){
    $emptyCD[] = $element;
};

header('Content-type: application/json');

echo json_encode( $emptyCD );

?>