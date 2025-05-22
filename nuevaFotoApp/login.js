document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('username', document.getElementById('username').value);
    formData.append('password', document.getElementById('password').value);
    
    try {
        const response = await fetch('authenticate.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            window.location.href = 'upload_calendar.php';
        } else {
            document.getElementById('loginMessage').textContent = 'Error: ' + result.message;
        }
    } catch (error) {
        document.getElementById('loginMessage').textContent = 'Error al iniciar sesión.';
    }
});
