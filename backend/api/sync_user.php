<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$host = "localhost";
$dbname = "sagip";
$username = "root";
$password = "";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "DB connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);

$firstName = $conn->real_escape_string($data['first_name']);
$lastName = $conn->real_escape_string($data['last_name']);
$email = $conn->real_escape_string($data['email']);
$address = $conn->real_escape_string($data['address']);
$fieldLocations = $conn->real_escape_string($data['field_locations']);

$sql = "INSERT INTO users (firstname, lastname, email, address, field_locations)
        VALUES ('$firstName', '$lastName', '$email', '$address', '$fieldLocations')";

if ($conn->query($sql)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => $conn->error]);
}

$conn->close();
