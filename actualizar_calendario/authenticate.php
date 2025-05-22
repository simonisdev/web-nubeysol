<?php
session_start();

$validUsername = 'nubeysol';
$validPassword = 'escuela#1594';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Registro de mensajes de depuración
error_log("Usuario recibido: " . $username);
error_log("Contraseña recibida: " . $password);

$response = ['success' => false];

if ($username === $validUsername && $password === $validPassword) {
    $_SESSION['authenticated'] = true;
    $response['success'] = true;
} else {
    $response['message'] = 'Usuario o contraseña incorrectos.';
    error_log("Autenticación fallida.");
}

echo json_encode($response);
?>
