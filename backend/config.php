<?php
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    exit;
}

header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: text/plain');

// Resto de tu código para manejar las solicitudes POST, GET, etc.
$con = mysqli_connect("localhost", "root", "", "ionic-php-crud") or die("could not connect DB");
