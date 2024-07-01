<?php 

header("Content-Type: application/json");


$rawData = file_get_contents("../../db/toDoList.json");

$data = json_decode($rawData, true);

echo json_encode($data);    

?>