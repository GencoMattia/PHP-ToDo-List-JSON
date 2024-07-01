<?php 
header("Content-Type: application/json");

if(isset($_GET["id"])) {
    $data = file_get_contents("../../db/toDoList.json");

    $data = json_decode($data, true);

    array_splice($data, $_GET["id"], 1);

    $jsonData = json_encode($data);

    file_put_contents("../../db/toDoList.json", $jsonData);

    header("Refresh: 1; url=../../index.php");   
} else {
    http_response_code(404);
}

?>