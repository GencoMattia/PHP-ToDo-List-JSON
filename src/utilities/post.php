<?php 
header("Content-Type: application/json");

$idsData = [];

if(isset($_GET["toDoItem"])) {
    $data = file_get_contents("../../db/toDoList.json");

    $data = json_decode($data, true);

    foreach($data as $item) {
        $idsData[] = $item["id"];
    };

    $data [] = [
        "text" => $_GET["toDoItem"],
        "isDone" => false,
        "id" => max($idsData) + 1,
    ];

    $jsonData = json_encode($data);

    file_put_contents("../../db/toDoList.json", $jsonData);

    header("Location: ../../index.php");   
} else {
    http_response_code(404);
}

echo $idsData;

?>