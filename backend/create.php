<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$nombre = $data ['nombre'];
$correo = $data ['correo'];

$q = mysqli_query($con, "INSERT INTO 'students'('nombre','correo') VALUES('$nombre','$correo')");

if($q) {
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);