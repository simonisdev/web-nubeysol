<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$targetDir = "uploads/";

// Verificar si el archivo es una imagen válida
if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
    $imageFileType = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
    $validExtensions = ['jpg', 'jpeg', 'png'];
    
    // Verificar la extensión del archivo
    if (in_array($imageFileType, $validExtensions)) {
        $targetFile = $targetDir . "imagen-calendario." . $imageFileType;
        $response = ['success' => false];
        
        // Eliminar la imagen existente si existe
        if (file_exists($targetFile)) {
            if (!unlink($targetFile)) {
                $response['message'] = 'Error al eliminar la imagen existente.';
                echo json_encode($response);
                exit();
            }
        }
        
        // Mover la nueva imagen al directorio de destino
        if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
            $response['success'] = true;
        } else {
            $response['message'] = 'Error al mover la nueva imagen.';
        }
    } else {
        $response['message'] = 'Formato de archivo no permitido. Solo se permiten JPG, JPEG y PNG.';
    }
} else {
    $response['message'] = 'No se recibió la imagen correctamente.';
    if (isset($_FILES['image']['error'])) {
        $response['message'] .= ' Error: ' . $_FILES['image']['error'];
    }
}

echo json_encode($response);
?>
