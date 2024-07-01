<?php 

if(isset($_GET["toDoItem"])) {
    $data = file_get_contents("../../db/toDoList.json");

    $data = json_decode($data, true);

    $data [] = [
        "text" => $_GET["toDoItem"],
        "isDone" => false,
    ];

    $jsonData = json_encode($data);

    file_put_contents("../../db/toDoList.json", $jsonData);
} else {
    http_response_code(404);
}

?>