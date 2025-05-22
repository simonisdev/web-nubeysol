<?php include 'check_auth.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subir y Reemplazar Imagen</title>
    <link rel="stylesheet" href="styles_calendar.css">
</head>
<body>
    <div class="container">
        <h1 class="permanent-marker-regular">Subir y Reemplazar Imagen del Calendario</h1>
        <img id="displayedImage" class="show-image" src="uploads/imagen-calendario.jpg" alt="Imagen Calendario">
        <form id="uploadForm" enctype="multipart/form-data">
            <input type="file" id="fileInput" name="image" accept="image/*" required>
            <button type="submit">Subir Imagen</button>
        </form>
        <p id="message"></p>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
