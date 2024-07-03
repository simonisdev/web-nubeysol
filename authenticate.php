<?php
session_start();

$validUsername = 'admin';
$validPassword = '123';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$response = ['success' => false];

if ($username === $validUsername && $password === $validPassword) {
    $_SESSION['authenticated'] = true;
    $response['success'] = true;
} else {
    $response['message'] = 'Usuario o contraseña incorrectos.';
}

echo json_encode($response);
?>
