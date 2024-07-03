<?php
session_start();

$validUsername = 'calendario#nubeysol';
$validPassword = 'calendario2024';

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
