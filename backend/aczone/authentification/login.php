<?php
require 'config.php';
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;

$query = "SELECT * FROM users WHERE name='$username' AND email='$password'";
$result = $conn->query($query);

if ($result->num_rows == 1) {
    $_SESSION['username'] = $username;
    echo json_encode(array('success' => 1));
} else {
    echo json_encode(array('success' => 0, 'message' => 'Nom d\'utilisateur ou mot de passe incorrect'));
}