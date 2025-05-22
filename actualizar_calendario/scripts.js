document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData();
    const fileField = document.getElementById('fileInput');
    formData.append('image', fileField.files[0]);
    
    try {
        const response = await fetch('upload.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            const imageFileType = fileField.files[0].name.split('.').pop().toLowerCase();
            document.getElementById('displayedImage').src = `uploads/imagen-calendario.${imageFileType}?${new Date().getTime()}`;
            document.getElementById('message').textContent = 'Imagen subida exitosamente.';
        } else {
            document.getElementById('message').textContent = 'Error: ' + result.message;
        }
    } catch (error) {
        document.getElementById('message').textContent = 'Error al subir la imagen.';
    }
});
